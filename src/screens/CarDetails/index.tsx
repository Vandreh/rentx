import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
//import speedSvg from '../../assets/speed.svg'
// import accelerationSvg from '../../assets/acceleration.svg'
// import forceSvg from '../../assets/force.svg'
// import gasolineSvg from '../../assets/gasoline.svg'
// import exchangeSvg from '../../assets/exchange.svg'
// import peopleSvg from '../../assets/people.svg'

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer
} from './styles';
import { CarDTO } from '../../dtos/CarDTO';

interface Params {
    car: CarDTO;
}

//export function CarDetails({ navigation }){
export function CarDetails(){
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleConfirmRental(){
        // navigation.navigate({
        //     name: 'Scheduling'
        // })
        navigation.navigate('Scheduling', { car });
    }

    function handleBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleBack}/>
           </Header>
           
           <CarImages>
                <ImageSlider
                    //imagesUrl={['https://www.carliveryauto.com/wp-content/uploads/2020/01/1845987-audi-audi-png-2100_1386.png']}
                    imagesUrl={car.photos}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>
                <Accessories>
                    {
                        car.accessories.map(accessory => (
                                <Accessory 
                                    key={accessory.type}
                                    name={accessory.name}
                                    icon={getAccessoryIcon(accessory.type)}
                               />
                        ))
                    }
                </Accessories>
                <About>{car.about}</About>
            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleConfirmRental} 
                    //onPress={() => navigation.navigate('Scheduling')}
                />
            </Footer>
        </Container>
    );
}