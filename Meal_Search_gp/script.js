const search = document.getElementById('search_input');   
const submit = document.getElementById('form_id');  
const shuffle = document.getElementById('shuffle_btn_id');  
const meal_items = document.getElementById('meal');  
const user_searchHeading = document.getElementById('search_heading');  
const first_mealItem = document.getElementById('single-meal'); 





function search_mealItem(e){
    e.preventDefault();   

  
    first_mealItem.innerHTML = "";

    
    const search_wrld =search.value;  

      if(search_wrld.trim()){   

        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${search_wrld}`
            ).then(res => res.json())
            .then((data) => {

                user_searchHeading.innerHTML = `<h2>Search Result for ${search_wrld}</h2>`;
                if(data.meals === null){
                    user_searchHeading.innerHTML = `<h2>No such result found for ${search_wrld}</h2>`
                    meal_items.innerHTML="";
                   
                }
                else{
                    meal_items.innerHTML = data.meals.map(
                        meal => `
                        <div id ="img_div" class = "meal">
                        <img id= "img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <div class="meal_infoDiv" data-mealId="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                        </div>
                        </div>`
                    )
                    .join("");
                }
            });

      }
      else{
          alert("please enter item name");
      }

}



submit.addEventListener('submit', search_mealItem);