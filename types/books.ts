export interface BookRecommendation {
    title: string
    author: string
    description: string
  }
  
  export interface RecommendationResponse {
    recommendations: BookRecommendation[]
  }
  