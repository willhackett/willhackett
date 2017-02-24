import React, { Component } from 'react';
import Brand from './Brand';
import logo from './logo.svg';
import './Data.css';

class Data extends Component {
  render() {
    return (
      <section id="DSECTION_1">
      	<article id="DARTICLE_2">
      		<time id="DTIME_3">
      			February 15, 2017
      		</time>
      		<h1 id="DH1_4">
      			 <a href="//willhackett.com/i-moved-to-svbtle" id="DA_5">Another post by somebody who left a popular blogging platform</a>
      		</h1>
      		<p id="DP_6">
      			Gosh. Shock horror. I left Medium.com.
      		</p>
      		<p id="DP_7">
      			I guess, it was an easy decision after they stopped their custom domain approval process for a “short review”.
      		</p>
      		<p id="DP_8">
      			<i id="DI_9">Psst! Still waiting, guys!</i>
      		</p>
      		<p id="DP_10">
      			I’ve been eager to find something better, so I’ve decided to give Svtble a go. On first look, they haven’t the foggiest idea how to spell subtle, but boy do they sure know how to pull off subtle.
      		</p>
      		<p id="DP_11">
      			The editor uses Markdown, which is a nice change from Medium’s rich text monolith. This keeps my posts simple, and my editing lag and distraction free.
      		</p>
      		<p id="DP_12">
      			If I’m going to complain about anything, it’s the lack of space for author pages. I’d like this to replace my website, but unfortunately it may need to live at a subdomain—I’m undecided.
      		</p>
      		<p id="DP_13">
      			I’ve migrated only some of my better blog posts across to Svbtle with the intention of writing more as I go along.
      		</p>
      	</article>
      </section>
    );
  }
}

export default Data;
