import React from 'react';
import styled from 'styled-components';
import TextCard from '../components/textCard';

const TextCardWrapper = styled.div`
    padding: 100px 0;
`;

const Contact = ()=>{
    return(
        <div>
            <TextCardWrapper>
                <TextCard 
                    title="聯絡我們"
                    description={(
                        <div>
                            <p>宸心宸藝工程</p>
                            <p>臺中市台灣大道三段111號12樓</p>
                            <p>contact@artmakertaiwan.com</p>
                            <p>0980-496-060</p>
                        </div>
                    )}
                />
            </TextCardWrapper>
        </div>
    );
};

export default Contact;