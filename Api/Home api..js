const get = (req,res) =>{

  res.send([
  
    {
      id: "101",
      url:"https://upload.wikimedia.org/wikipedia/commons/8/85/TCS_SIPCOT_Building.jpg",
      content:"Tata Consultancy Services (TCS) is an Indian multinational information technology (IT) services and consulting company with its headquarters in Mumbai.[6][7] It is a part of the Tata Group and operates in 150 locations across 46 countries.[8] In July 2022, it was reported that TCS had over 600,000 employees worldwide",
      date:"On January 11, 2010.",
      width: 540,
      height: 427,
      related:['Recent','Images','videos','news','Blogs'],
    },
    {
      id: "102",
      title:"Warner Bros. 2021 Film Slate - New Hybrid Distribution Model",
      url:"https://bingeddata.s3.amazonaws.com/uploads/2020/12/warner-brothers-hbo-max-2021-movies-list.jpg",
      content:"Warner Bros announced that it has committed to releasing its 2021 film slate via a unique, consumer-focused distribution model in which Warner Bros.",
      category:"Wine",
      date:"On December 07,2020",
      width: 500,
      height: 500,
    },
    {
        id: "103",
        url: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiFagSGE_G4KLwhATMOXwIzzO_LQ6mbqbVheqyzxeo474FwH-TXLsKfT6zog0BqJCM1U&usqp=CAU",
        title:"Holi 2022: To play or not to play, opinions vary in Salt Lake & New Town",
        content:"That is the dilemma people are facing on the day of the festival after two years of abstention but some are set to make the most of the occasion...",
        category:"Celebration",
        date:"On January 31, 2010",
        width: 640,
        height: 428,
      },
    {
      id: "104",
      title:'Konark Festival And International Sand Art Festival 2021 Kicks Off In Style',
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-OSxl8lMwuQfI_hAMGATnEc9KAoSNg-VOg&usqp=CAU",
      content:"Konark Festival 2021, the five-day Indian classical dance extravaganza was inaugurated by Chief Minister Naveen Patnaik at Konark on Wednesday.",
      category:"Celebration",
      date:"On october 15,2016",
      width: 500,
      height: 351,
    },
    
    {
      id: "105",
      title:"Lantern-Festival-Lanterns-Diagonal",
      url:"https://tripgourmets.com/wp-content/uploads/2017/11/Hoi-An-Lantern-Festival-Lanterns-Diagonal.jpg",
      content:" The emperor was overjoyed and ordered that on the 15th day of the first lunar month every year, people should make glutinous rice balls and hang up lanterns to worship the God of Fire. Because Yuanxiao was so good at it, people started to name the food after her, and from then on the day has been called the Lantern Festival or Yuan Xiao Jie.",
      category:"Celebration",      
      date:"On September 23, 2017.",
      width: 500,
      height: 307,
    },
    {
        id: "106",
        title:"Mountains and pink flowers",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886__340.jpg",
        content:"Free landscapes images to use in your next project. Browse amazing images uploaded by the Pixabay community.",
        category:"Mountains",
        date:"On 25 December 2012.",
        width: 1193,
        height: 1006,
      },
     {
        id: "107",
        title:'Boeing 737 Max Resumes Flying U.S. Passengers After 2-Year Halt.',
       url:"https://i.insider.com/6047db54df53f8001802a56d?width=1136&format=jpeg",
        content:"American Airlines used the plane, which was grounded in March 2019 after two fatal crashes, on a flight from Miami to New York.",
        category:"Airlines",
        date:"On october 15,2016",
        width: 500,
        height: 351,
      },
  
    ])
  }
  
  module.exports.apicontroller = get;