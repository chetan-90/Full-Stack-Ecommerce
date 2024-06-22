import SummaryApi from "../common"

const fetchCategoryWiseProduct = async(category) => {
  const response = await fetch(SummaryApi.categoryWiseProduct.url,{
    method : SummaryApi.categoryWiseProduct.method,
    headers :{
        "content-type" : "application/json"
    },
    body : JSON.stringify({
        category : category
    })
  })
  // Example of checking the URL
     console.log("SummaryApi.categoryWiseProduct.url  ",SummaryApi.categoryWiseProduct.url); // Should print the correct API URL


  const dataCategory = await response.json()

  return dataCategory
   
}

export default fetchCategoryWiseProduct
