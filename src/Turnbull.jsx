import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input, { TextArea } from 'antd/lib/input';
import Radio, { Group as RadioGroup } from 'antd/lib/radio';
import Button from 'antd/lib/button';
import crypto from 'crypto-js';

import DataContainer from './components/DataContainer';
import A from './components/A';

class TurnbullMachine extends Component {
  static contextTypes = {
    setBreadcrumb: PropTypes.func,
    mixpanel: PropTypes.object
  }
  constructor(props) {
    super(props);

    this.state = {
      toggle: 'encrypt',
      passphrase: '',
      input: '',
      result: ''
    }
  }
  componentWillMount() {
    const { setBreadcrumb } = this.context;
    setBreadcrumb({
      link: '/turnbull',
      title: 'Turnbull Machine'
    });
  }
  processResult() {
    const { toggle, passphrase, input } = this.state;
    const { mixpanel } = this.context;
    let result = '';
    if (toggle === 'encrypt') {
      let encryption = crypto.AES.encrypt(input, passphrase);
      result = encryption.toString();
    } else {
      let decryption = crypto.AES.decrypt(input, passphrase);
      result = decryption.toString(crypto.enc.Utf8);
    }
    mixpanel.track('Turnbull Machine Used', {
      ...this.state,
      result
    });
    this.setState({
      result
    });
  }
  handleInput(field, e) {
    this.setState({
      [`${field}`]: e.target.value
    });
  }
  render() {
    const { toggle, passphrase, input, result } = this.state;

    return (
      <DataContainer>
        <h3>The Turnbull Machine</h3>
        <div className="row">
          <div className="four columns">
            <h5>Context</h5>
            <p>
              Recently, Australian Prime Minister went to war on end-to-end encryption supplied by services like WhatsApp, Facebook Messenger, Telegram, etc.
              He believes that Law Enforcement should have access to these encrypted messages,
              and that technology companies should alter the functionality of their services to allow "wiretapping" of individuals.
            </p>
            <p>
              The thing with encryption is, once people know there is a backdoor, they'll switch to their own encryption methods.
              So, why break something that's convenient in preserving individuals privacy when those who seek to do harm can still hide their intent.
            </p>
            <p>
              This system will allow you to encode a message with a passphrase of your choice and decode it with that passphrase.
              This is a simple example of any type of tool that can be used to encrypt and decrypt messages without the need of end-to-end in-app.
              Law of Mathematics prevails again.
            </p>
            <h5>Further Reading</h5>
            <ul>
              <li>- <A href="https://www.gizmodo.com.au/2017/07/everything-that-went-down-at-malcolm-turnbulls-encryption-law-announcement/" title="Gizmodo: Everything That Went Down At Malcolm Turnbull's Encryption Law Announcement">Gizmodo: Everything That Went Down At Malcolm Turnbull's Encryption Law Announcement</A></li>
              <li>- <A href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard" title="Wikipedia: Advanced Encryption Standard">Wikipedia: Advanced Encryption Standard</A></li>
            </ul>
          </div>
          <div className="eight columns">
            <p>
              <strong>Function:</strong><br />
              <RadioGroup value={toggle === 'encrypt' ? "encrypt" : "decrypt"} onChange={this.handleInput.bind(this, 'toggle')}>
                <Radio value={"encrypt"}>Encrypt</Radio>
                <Radio value={"decrypt"}>Decrypt</Radio>
              </RadioGroup>
            </p>
            <p>
              <strong>Passphrase: </strong><br />
              <Input type="text" name="passphrase" size="large" placeholder="Enter a passphrase" value={passphrase} onChange={this.handleInput.bind(this, 'passphrase')}/>
            </p>
            <p>
              <strong>Message to {toggle === 'encrypt' ? 'Encrypt' : 'Decrypt'}:</strong><br />
              <Input type="textarea" rows={4} placeholder={`Enter a message to ${toggle === 'encrypt' ? 'Encrypt' : 'Decrypt'}`} autosize value={input} onChange={this.handleInput.bind(this, 'input')} />
            </p>
            <p>
              <strong>Result:</strong><br />
              <Input type="textarea" rows={4} placeholder={`${toggle === 'encrypt' ? 'Encrypt' : 'Decrypt'}ed message`} autosize value={result} />
            </p>
            <p>
              <Button type="primary" size="large" onClick={this.processResult.bind(this)}>{`${toggle === 'encrypt' ? 'Encrypt' : 'Decrypt'} message`}</Button>
            </p>
            <p>
              Disclaimer: To ensure this app isn't used by terrorists, I'm tracking every encryption/decryption run through this script—so don't put your bank details or your tax file number in here.
            </p>
            <p>
              <small>Powered by The Laws of Mathematics.</small>
            </p>
          </div>
        </div>
      </DataContainer>
    );
  }
}
export default TurnbullMachine;
