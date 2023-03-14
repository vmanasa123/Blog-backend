const get = (req,res) =>{

  res.send([
  
    {
      id: "10",
      title:"Latest from the world of film",
      content:"With films dating from 1951 to 2014, this list will give you a glimpse into just how much Bollywood has changed over the last 60 years, while providing you with some absolute bangers you'll want to add to your playlists, too. ",
      category:"Musical moments",
      date:"On March 2, 2023",
      width: 640,
      height: 427,
      related:['Recent','Images','videos','news','Blogs'],
     url:" https://i.ytimg.com/vi/zTZDb_iKooI/maxresdefault.jpg"
    },
    {
      id: "11",
      title:"Actors Akshay Kumar and Amy Jackson Bollywood .",
      content:"Filmy Wednesday: Akshay Kumar, Amy Jackson, Salman Khan, Sooraj",
      category:"Party Songs",
      date:" On December 20, 2018",
      width: 700,
      height: 524,
      url:"https://i.pinimg.com/736x/76/46/18/764618dee00f82ca00f3027dd5428fe1--amy-jackson-akshay-kumar.jpg",
    },
    {
      id: "12",
      title:"Race 3 , Latest Bollywood Film Trailer ",
      url: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2018/06/upcoming-bollywood-movie-1528459686.jpg",
      content:"Race 3 is directed by Remo D’Souza and stars Salman Khan, Anil Kapoor, Bobby Deol, Saqib Saleem, Daisy Shah and Jacqueline Fernandez in lead roles. It is produced by Tips Industries and Salman Khan films.",
      category:"Bollywood",
      date:"On June 15 2018",
      width: 2696,
      height: 3546,

    },
    {
      id: "14",
      title:'NJ - Prabhu Deva and Indian Dancers perform for Donald Trump at Edison New Jersey Hindu Indian-American',
     url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmIOCgP1KTGvSQseLCuzES7wNqI2G_RZiBRQ&usqp=CAU",
      content:"NJ - Prabhu Deva and Indian Dancers perform for Donald Trump at Edison New Jersey Hindu Indian-American rally for Humanity United Against Terror",
      category:"Bollywood",
      date:"On october 15,2016",
      width: 500,
      height: 351,
    },
    {
      id: "15",
      title:"Actors Akshay Kuma and Amy Jackson Bollywood Celebrity India",
      content:"Actors Akshay Kumar and Amy Jackson at the HT GIFA grand opening ceremony event in Tau Devi Lal stadium, in Gurgaon.",
      category:"Celebration",      
      date:"On September 20, 2015.",
      width: 500,
      height: 307,
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz83To0AH1udJpVM7TvRyA0DO8mFBczpWygg&usqp=CAU",
    },
    {
      id: "16",
      title:"Best Bollywood Dumb Charades Movies Really Really Hard To Guess",
      content:"Whoever came up with this name is a genius. And before you dismiss this one, do note that besides being a great Dumb Charade movie name,  this was the first Indian film for which all songs were recorded in stereophonic sound.",
      category:"Bollywood",
      date:"On April 21, 2018.",
      width: 1280,
      height: 956,
     url:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROS_nX_iDe8rnuuA-qYLNjbS4IVw1tSfNd6g&usqp=CAU",
    },
    {
      id: "17",
      title:"EVERY TIME SONGS MAKE YOU TRAVEL BACK IN TIME",
      url: "https://icdn.isrgrajan.com/in/2020/09/13-recreated-Bollywood-songs-of-2020-1-696x399.jpg",
      content:"Songs and Music are the part of the life which one cannot separate their self from. People throughout history have used songs in order to relieve their past memories and allow them to express their emotions. ",
      category:"Bollywood songs",
      date:"On December 21,2021",
      width: 500,
      height: 500,

    },
    {
      id: "18",
      title:"Indian Music and Dance Show",
      content:"The Indian Bollywood Film Star Song and Dance Troupe perform on stage during Indian Music and Dance Show at Beijing Exhibition Theater on January 31, 2010 in Beijing, China. The Indian Bollywood Film Star Song and Dance Troupe stage Indian pop songs and dance scenes from classic Bollywood films, including Rhythm of Love, Jaane Kisne, and Overjoyed Rhythm.",
      category:"Dance",
      date:"On January 31, 2010",
      width: 640,
      height: 428,
     url:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHuiP1Uoe3QQ1BmNHaRus0FOjQJEp6tITOYA&usqp=CAU",
    },
    {
      id: "19",
      title:"Besharam Rang, protests",
      url:" https://www.boomlive.in/h-upload/2022/12/15/1600x960_994145-pathan-fi.jpg",
      content:"Taran Adarsh of Bollywood Hungama rated the film 4.5 out of 5 stars and termed the film a complete entertainer replete with action, emotions, patriotism, humour, thrill, and of course, the star power of Shah Rukh Khan.[73] Sukanya Verma of Rediff gave the film a rating of 4 out of 5 stars and wrote.",
      category:"Movies",
      date:"On September 30, 2020",
      width: 450,
      height: 600,
    },
    {
      id: "20",
      title:"Pathaan (film)",
      url:"data:image/jpeg;base64,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",

      content:"Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra of Yash Raj Films.[5] The film stars Shah Rukh Khan, Deepika Padukone, and John Abraham, alongside Dimple Kapadia and Ashutosh Rana.  ",
      category:"Movies",
      date:"On 25 December 2019.",
      width: 1193,
      height: 1006,
    }

  ])
}

module.exports.apicontroller = get;