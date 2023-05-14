import styled from "styled-components";
import {useSelector} from "react-redux";
import {IState} from "../features/location/getLocationSlice.ts";

const CardWrapper = styled.div`
  position: absolute;
  z-index: 10;
  
  width: 940px;
  
  left: 50%;
  right: 50%;
  
  margin-left: -470px;
  margin-top: 180px;

`

const Card = styled.ul`
  height: 120px;
  

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  background: #fff;
  text-align: left;

  margin: 0;
  padding: 10px 40px;
  
  border-radius: 15px;

  @media(max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
  
`

const CardMenuItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
    margin: 0;
    padding: 25px 10px;

    font-family: var(--ff);
    font-size: 12px;
    font-weight: var(--fw-b);
    color: var(--dark-gray);


    text-transform: uppercase;
`

const CardEl = styled.span`
    font-family: var(--ff);
    font-size: var(--fz);
    font-weight: var(--fw-b);
    color: #000;

    text-transform: none;
  
`

function InfoCard() {
    const {data, isLoading} = useSelector((state: Record<string, IState>) => state.location);


    return (
        <CardWrapper>
            {isLoading ?
                <>IS LOADING.....</> :
                <Card>
                      <CardMenuItem>
                        <span>ip address</span>
                        <CardEl>{data?.query}</CardEl>
                      </CardMenuItem>
                      <CardMenuItem>
                        <span>Location</span>
                        <CardEl>{data?.regionName}</CardEl>
                      </CardMenuItem>
                      <CardMenuItem>
                        <span>Timezone</span>
                        <CardEl>{data?.timezone}</CardEl>
                      </CardMenuItem>
                      <CardMenuItem>
                        <span>isp</span>
                        <CardEl>{data?.isp}</CardEl>
                      </CardMenuItem>
                </Card>
            }

        </CardWrapper>

    );
}

export default InfoCard;