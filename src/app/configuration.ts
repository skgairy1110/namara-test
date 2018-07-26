export const configuration = {

	intro : {
  	tagline : 'SUCCESS',
  	title : 'How We Help You To Sell Your Product',
  	description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
  	features : [
	  {icon :'html5', title : 'HTML5 &amp; CSS3', description : 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico' },
	  {icon :'bolt', title : 'Easy to Use', description : 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi' },
	  {icon :'tablet', title : 'Fully Responsive', description : 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
	  {icon :'rocket', title : 'Parallax Effect', description : 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' }
	  ]
	},

  testimonials : {
  	tagline : 'FEEDBACK',
  	title : 'What our customers are saying',
  	description : '',
    feedbacks : [
       {  userimage : 'user-1.jpg', comments : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua', username : 'John Doe', company : 'ABC'},
       {  userimage : 'user-2.jpg', comments : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua', username : 'Roslyn Doe ', company : 'DEF'},
       {  userimage : 'user-3.jpg', comments : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua', username : 'Thomas Doe', company : 'GHI'}

       ]
  },
  clients : {
  	tagline : 'TRUST',
  	title : 'Companies who use our services',
  	description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
    companies : [
        { logo : 'company-logo1.png', name : 'Tree', weblink : '\Clients'},
        { logo : 'company-logo2.png', name : 'Fingerprint', weblink : '\Clients'},
        { logo : 'company-logo3.png', name : 'The Man', weblink : '\Clients'},
        { logo : 'company-logo4.png', name : 'Mustache', weblink : '\Clients'},
        { logo : 'company-logo5.png', name : 'Goat', weblink : '\Clients'},
        { logo : 'company-logo6.png', name : 'Justice', weblink :'\Clients'},
        { logo : 'company-logo7.png', name : 'Ball', weblink : '\Clients'},
        { logo : 'company-logo8.png', name : 'Cold', weblink : '\Clients'},
        { logo : 'company-logo9.png', name : 'apple', weblink : '\Clients'}
    ]
  },
  pricing : {
  	tagline : 'YOUR CHOICE',
  	title : 'We have the right package for you',
  	description : '',
    plans : [
        { title : 'PERSONAL', subtitle : 'The standard version', currency : '$', price : '19', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
          downloads : '5 Downloads', extensions : '2 Extensions', tutorials : 'Tutorials', support : 'Forum Support', update : '1 year free updates', ctatext : 'buy today', ctalink : 'http://www.google.com', featured : true},
        { title : 'STUDENT', subtitle : 'Most popular choice', currency : '$', price : '29', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
          downloads: '15 Downloads', extensions : '5 Extensions', tutorials : 'Tutorials with Files', support : 'Forum Support',  update : '2 year free updates', ctatext : 'buy today', ctalink : 'http://www.google.com', featured : true},
        { title : 'BUSINESS', subtitle : 'For the whole team', currency : '$', price : '49', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
          downloads : 'Unlimited Downloads', extensions : 'Unlimited Extensions', tutorials : 'HD Video Tutorials', support : 'Chat Support', update : 'Lifetime free updates', ctatext : 'buy today', ctalink : 'http://www.google.com', featured : true}
    ]
  },
  gallery : {
  	images : [
  	{imgsrc : 'gallery-image-1.jpg', altvalue : 'Landing Page'},
    {imgsrc : 'gallery-image-2.jpg', altvalue : 'Landing Page'},
    {imgsrc : 'gallery-image-3.jpg', altvalue : 'Landing Page'},
    {imgsrc : 'gallery-image-4.jpg', altvalue : 'Landing Page'},
    {imgsrc : 'gallery-image-5.jpg', altvalue : 'Landing Page'},
    {imgsrc : 'gallery-image-6.jpg', altvalue : 'Landing Page'}
  	]
  },
  footer : {
    copyrighttext : 'Made with love by ', copyrightlink : 'https://www.shapingrain.com', copyrightuser : 'ShapingRain', 
    icons : [{fafaicon : 'facebook', title : 'Facebook',  link : 'https://www.facebook.com/', username : 'shankargairy', target : '_blank' }, 
    {fafaicon : 'google-plus', title : 'Google+', link : 'http://google.com/+', username : 'shankargairy', target : '_blank'}, 
    {fafaicon : 'twitter', title : 'Twitter',  link : 'http://www.twitter.com/', username : 'shankargairy', target : '_blank'}, 
    {fafaicon : 'instagram', title : 'Instagram', link : 'http://instagram.com/', username : 'shankargairy', target : '_blank'}, 
    {fafaicon : 'behance', title : 'Behance', link : 'http://www.behance.net',  username : 'shankargairy', target : '_blank'}]
  },

  blog : {
    tagline : 'Blog', 
    title : 'Lets discuss about', 
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
    btnTxt : 'Go back',


    posts : [
     {id : 1, title : 'The First Article', author : 'AD', publishdate: '2018-07-17T07:22Z', excert: 'This is the summary of the article', imgsrc : 'gallery-image-1.jpg'},
     {id : 2, title : 'The Second Article', author : 'MAN', publishdate: '2018-07-17T07:22Z', excert: 'This is the summary of the article', imgsrc : 'gallery-image-2.jpg'},
     {id : 3, title : 'The Third Article', author : 'GILL', publishdate: '2018-07-17T07:22Z', excert: 'This is the summary of the article', imgsrc : 'gallery-image-3.jpg'},
     {id : 4, title : 'The Fourth Article', author : 'LYN', publishdate: '2017-03-17T07:22Z', excert: 'This is the summary of the article', imgsrc : 'gallery-image-4.jpg'},
     {id : 5, title : 'The Fifth Article', author : 'SAM', publishdate: '2017-01-17T07:22Z', excert: 'This is the summary of the article', imgsrc : 'gallery-image-5.jpg' },
     {id : 6, title : 'The Sixth Article', author : 'AD', publishdate: '2017-04-17T07:22Z', excert: 'This is the summary of the article', imgsrc : 'gallery-image-6.jpg' }
    ]
  },

 
    
    

 




  youtubetest : {
    ctatext : 'watch video', ctaicon : 'play',
  },



};