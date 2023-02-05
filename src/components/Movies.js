import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            <Wrap>
                <img src="images/poster 1.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 2.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 3.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 4.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 5.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 6.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 7.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 8.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 9.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 10.png"  />
            </Wrap>
        </Content>
        
        <h4>New Releases</h4>
        <Content>
            <Wrap>
                <img src="images/poster 9.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 7.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 5.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 3.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 1.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 2.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 4.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 6.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 8.png" />
            </Wrap>
            <Wrap>
                <img src="images/poster 11.png" />
            </Wrap>
        </Content>
    </Container>

    
  )
}

export default Movies

const Container = styled.div`
    padding
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0,1fr));
`

const Wrap = styled.div`

    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-color: rgba(249, 249, 249, 0.8);

    }
`