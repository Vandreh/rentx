import React, { useEffect, useState } from 'react';
//import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Alert, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import Logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList,
    MyCarsButton
} from './styles';

export function Home({ navigation }){
    const [cars, setCars] = useState<CarDTO[]>([])
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    //const navigation = useNavigation();

    // const carData = {
    //     brand: 'AUDI',
    //     name: 'RS 5 Coupé',
    //     rent: {
    //         period: 'AO DIA',
    //         price: 120,
    //     },
    // thumbnail: 'https://www.carliveryauto.com/wp-content/uploads/2020/01/1845987-audi-audi-png-2100_1386.png'
    // }

    function handleCarDetails(car: CarDTO){
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars(){
        navigation.navigate('MyCars');
    }

    useEffect(() => {
        async function fetchCars(){
            try {
                const response = await api.get('/cars');
                setCars(response.data);
                //console.log(response);
            } catch (error) {
                Alert.alert('Erro', 'Erro na conexão')
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        }

        fetchCars();
    }, []);

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            { loading ? <Load/> : 
                <CarList
                    data={cars}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) =>
                        <Car data={item} onPress={() => handleCarDetails(item)}/>
                    }
                />
            }

            <MyCarsButton onPress={handleOpenMyCars}>
                <Ionicons
                    name="ios-car-sport"
                    size={32}
                    color={theme.colors.shape}
                />
            </MyCarsButton>
        </Container>
    );
}