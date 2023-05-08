import styled from "styled-components";
import {useSelector} from "react-redux";
import {IState} from "../features/location/getLocationSlice.ts";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background: #fff;
  padding: 10px 20px;
  border-radius: 20px;


  @media(max-width: 375px) {
    height: auto;
    flex-direction: column;
    padding: 30px 40px;
  }
  
`

const CardEl = styled.span`
    display: flex;
    flex-direction: column; 
    align-items: start;
    justify-content: center;
    gap: 10px;
  
    border-right: 1px solid var(--dark-gray);
    padding: 0 60px 20px 30px;

    color: #000;
    font-family: var(--ff);
    font-size: var(--fz);
    font-weight: var(--fw-m);
  
    &:last-child {
      border-right: none;
    }
    & span {
      text-transform: uppercase;
      color: var(--dark-gray);
      font-family: var(--ff);
      font-size: 12px;
      font-weight: var(--fw-m);
      letter-spacing: 1px;
    }

    @media(max-width: 375px) {
      border-right: none;
      align-items: center;
      padding: 10px 40px;
    }
  
`

function InfoCard() {
    const {data, error, isLoading} = useSelector((state: Record<string, IState>) => state.location);


    return (
        <CardWrapper>
            {isLoading ?
                <>IS LOADING.....</> :
                <Card>
                    <CardEl>
                        <span>ip address</span>
                        {data?.query}
                    </CardEl>
                    <CardEl><span>Location</span>{data?.regionName}</CardEl>
                    <CardEl><span>Timezone</span>{data?.timezone}</CardEl>
                    <CardEl><span>isp</span>{data?.isp}</CardEl>
                </Card>
            }

        </CardWrapper>

    );
}

export default InfoCard;