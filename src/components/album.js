import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from "@material-ui/core/Modal";
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Carousel from 'nuka-carousel';


const ModalImage = styled(Img)`
    width: 90vw;
    height: 90vh;
    max-width: calc( 92vh * ${({ratio})=>ratio} );
    max-height: calc( 92vw / ${({ratio})=>ratio} );
    margin: auto;
    cursor: grab;
`;

const ModalPaper = styled.div`
    :focus{
        outline: none;
    }
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 15px;
`;

const CoverImage = styled(Img)`
    width: 100%;
    height: 100%;
`;

const CoverWrapper = styled.div`
    position: relative;
    width: 252px;
    height: 152px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
`;

const Title = styled.div`
    ${CoverWrapper}:hover &{
        background-color: rgba(0,0,0,0.8);
        color: ${({theme})=>theme? theme.color.text.primary: "white"};
    }
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    padding: 0 8px;
    color: rgba(0,0,0,0);
    font-size: 25px;
    font-weight: 500;
    position: absolute;
    top: 0;
    width: 252px;
    height: 152px;
    transition: all 0.2s;
`;

const CloseButton = styled(IoIosClose)`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 60px;
    color: ${({theme})=>theme? theme.color.text.secondary: "black"};;
    background-color: ${({theme})=>theme? theme.color.text.primary: "grey"};
    border-radius: 5px;
`;


const Cover = ({title, fluid, onClick})=>{
    return(
        <CoverWrapper onClick={onClick}>
            <CoverImage fluid={fluid} />
            <Title>{title}</Title>
        </CoverWrapper>
    );
}

function getFluids(allImages, names){
    let result = [];
    names.forEach(name=> allImages.edges.some(({node})=> {
        let found = node.fluid.originalName === name
        found && result.push(node.fluid);
        return found;
    }));
    return result;
}

const CarouselButton = styled.div`
    cursor: pointer;
    font-size: 70px;
    color: ${({theme})=>theme? theme.color.text.primary: "white"};
    -webkit-tap-highlight-color: transparent;
`;

const Album = ({title, content})=>{
    const fileNames = content.map(path=>path.replace("../../../static/img/",""));
    const [ enable, setEnable ] = useState(false);
    return(
        <StaticQuery
            query={query}
            render={data=>{
                const {allImages} = data;
                const fluids = getFluids(allImages, fileNames);
                return(
                    <Wrapper>
                        <Cover
                            onClick={e=>{console.log(enable);setEnable(true)}} 
                            title={title}
                            fluid={fluids[0]} 
                        />
                        <Modal
                            open={enable}
                        >
                            <ModalPaper>
                                <Carousel
                                    renderCenterLeftControls={({previousSlide})=>(
                                        <CarouselButton onClick={previousSlide}><IoIosArrowBack /></CarouselButton>
                                    )}
                                    renderCenterRightControls={({nextSlide})=>(
                                        <CarouselButton onClick={nextSlide}><IoIosArrowForward /></CarouselButton>
                                    )}
                                    width="90vw"
                                    height="90vh"
                                    autoplay 
                                    autoplayInterval={8 * 1000} 
                                    pauseOnHover 
                                    swiping 
                                    cellSpacing={1} 
                                    wrapAround
                                >
                                    {fluids.map((fluid, index)=>(
                                        <ModalImage key={index} fluid={fluid} ratio={fluid.aspectRatio}/>
                                    ))}
                                </Carousel>
                                <CloseButton onClick={e=>setEnable(false)}/>
                            </ModalPaper>
                        </Modal>
                    </Wrapper>
                )
            }}
        />
    );
};

export default Album;

const query = graphql`
    query{
        allImages: allImageSharp {
            edges {
                node {
                    fluid(maxWidth: 300) {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                }
            }
        }
    }
`;