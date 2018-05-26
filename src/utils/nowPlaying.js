// @flow

type DataType = {
  item: Object,
}

export default (getAccessToken: () => string) => {
  let listeners = {}
  let interval = null

  const fetchGeneric = (url: string) => {
    return fetch(url, {
      headers: { Authorization: `Bearer ${getAccessToken()}` }
    })
  }

  const on = (topic: string, callback: (data: DataType) => void) => {
    listeners[topic] = [
      ...listeners[topic] || [],
      callback
    ]
  }

  const dispatch = (topic, data) => {
    const listenerCallbacks = listeners[topic]
    listenerCallbacks.forEach(listener => {
      listener.call(null, data)
    })
  }

  const fetchPlayer = async (): Promise<?DataType> => {
    try {
      const response = await fetchGeneric(`https://api.spotify.com/v1/me/player`)
      dispatch('loaded', true)
      if (response.status === 401) {
        fetch('https://wt-aeaef689afdf1c9db49be4098983a7d4-0.sandbox.auth0-extend.com/spotifySync')
        return null
      } else if (response.status > 500) {
        console.error(`Spotify error`, response)
      } else {
        return response.json()
      }
    } catch (err) {
      throw err
    }
  }

  const loop = async () => {
    try {
      const data = await fetchPlayer()
      if (!!data && data.item !== null) {
        dispatch('update', data)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const unmount = () => {
    if (interval !== null) {
      clearInterval(interval)
    }
  }

  const init = () => {
    interval = setInterval(loop, 1500)
  }

  return {
    init,
    unmount,
    on
  }
}
