// import React from 'react';
import breakpoint from 'styled-components-breakpoint';
// import { FacebookProvider, SendToMessenger, MessageUs, Like, Page } from 'react-facebook';
import styled from 'styled-components';

import React, { Component} from 'react';
import { FacebookProvider, SendToMessenger, EmbeddedPost, Page, MessageUs } from 'react-facebook';

import MessengerCustomerChat from 'react-messenger-customer-chat';

export default class FacebookMessage extends Component {
  render() {
    return (
        // <FacebookProvider appId="388611788532974">
        //     <MessageUs messengerAppId="388611788532974" pageId="2301403163467351"/>
        // </FacebookProvider>
        <MessengerCustomerChat
            pageId="2301403163467351"
            appId="388611788532974"
        />
    );
  }
}


