import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
//import GasolinaSvg from '../../assets/gasoline.svg';
import { CarDTO } from '../../dtos/CarDTO';

import {
    About,
    Brand,
    Container,
    Details,
    Name,  
    Rent,
    Period,
    Price,
    Type,
    CarImage
} from './styles';

// export interface CardData {
//     brand: string;
//     name: string;
//     rent: {
//         period:string;
//         price: number;
//     },
//     thumbnail: string;
// }

interface Props extends TouchableOpacityProps{
    //data: CardData;
    data: CarDTO;
}

export function Car({ data, ...rest }: Props){
    const  MotorIcon = getAccessoryIcon(data.fuel_type);

    return (
        <Container {...rest}>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>

                    <Type>
                        <MotorIcon/>
                    </Type>
                </About>
            </Details>

            <CarImage
                source={{ uri: data.thumbnail }}
                resizeMode="contain"
            />
        </Container>
    );
}