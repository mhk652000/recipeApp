


import React, { useEffect, useState } from 'react';
import './home.css';
import { Row, Col } from 'antd';
import Header from '../../components/header/Header';
import Sticky from '../../components/sticky/Sticky';
import Card from '../../components/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToAllData } from '../../store';

export default function Home() {
  const dispatch = useDispatch();

  const [recipeData, setRecipeData] = useState([]);
  const week1= useSelector(state => state.week1);
  const week2= useSelector(state => state.week2);
  const week3= useSelector(state => state.week3);
  const week4= useSelector(state => state.week4);
  const activeTab = useSelector(state => state.activeTab);

 


  const apiUrl = 'https://dummyjson.com/recipes';

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          console.error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipeData(data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    if(recipeData.length > 0){
      dispatch(addToAllData(recipeData)); 
    }
  }, [recipeData]);

  if(activeTab === "All"){
    return (
      <div >
        <Header />
        <div className="mainPg">

          <div className='headTitle'>
          <h1>WEEK ORDERS</h1>
          </div>
          

          <Sticky />

          <div className='cardCont'>
            <Row gutter={[16, 16]} className='cardRows'> 
              {recipeData.map((recipe, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}> 
                  <Card
                    id={recipe.id}
                    imageUrl={recipe.image}
                    title={recipe.name}
                    details={recipe.instructions}
                    rating={recipe.rating}
                    cuisine={recipe.cuisine}
                    mealType={recipe.mealType}
                  />
                </Col>
              ))}
            </Row>
          </div>
          
        </div>
      </div>
    );
  } else if(activeTab === "Week 1"){
    return (
      <div >
        
        <Header />
        <div className="mainPg">
          <Sticky />
          <div className='cardCont'>
          <Row gutter={[16, 16]} className='cardRows' > 
            {week1[0]?.map((recipe, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}> 
                <Card
                  imageUrl={recipe.imageUrl}
                  title={recipe.name}
                  details={recipe.details}
                  rating={recipe.rating}
                  cuisine={recipe.cuisine}
                  mealType={recipe.mealType}
                />
              </Col>
            ))}
          </Row>
          </div>
          
        </div>
      </div>
    );
  } else if(activeTab === "Week 2"){
    
    return (
      <div>
        <Header />
        <div className="mainPg">
          <Sticky />
          <div className='cardCont'>
          <Row gutter={[16, 16]} className='cardRows'> 
            {week2[0]?.map((recipe, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}> 
                <Card
                  imageUrl={recipe.imageUrl}
                  title={recipe.name}
                  details={recipe.details}
                  rating={recipe.rating}
                  cuisine={recipe.cuisine}
                  mealType={recipe.mealType}
                />
              </Col>
            ))}
          </Row>
          </div>
          
        </div>
      </div>
    );
  } else if(activeTab === "Week 3"){
    return (
      <div>
        <Header />
        <div className="mainPg">
          <Sticky />
          <div className='cardCont'>
          <Row gutter={[16, 16]} className='cardRows'> 
            {week3[0]?.map((recipe, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}> 
                <Card
                  imageUrl={recipe.imageUrl}
                  title={recipe.name}
                  details={recipe.details}
                  rating={recipe.rating}
                  cuisine={recipe.cuisine}
                  mealType={recipe.mealType}
                />
              </Col>
            ))}
          </Row>
          </div>
          
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div className="mainPg">
          <Sticky />
          <div className='cardCont'>
          <Row gutter={[16, 16]} className='cardRows'> 
            {week4[0]?.map((recipe, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}> 
                <Card
                  imageUrl={recipe.imageUrl}
                  title={recipe.name}
                  details={recipe.details}
                  rating={recipe.rating}
                  cuisine={recipe.cuisine}
                  mealType={recipe.mealType}
                />
              </Col>
            ))}
          </Row>
          </div>
          
        </div>
      </div>
    );
  }
}


