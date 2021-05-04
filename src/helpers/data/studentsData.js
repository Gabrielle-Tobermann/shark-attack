const students = [
  {
    id: 1,
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055587-f18af680-ace0-11eb-8204-0b80493e94b0.jpg'
  },
  {
    id: 2,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055590-f2238d00-ace0-11eb-809d-53180a840266.jpg'
  },
  {
    id: 3,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055591-f2238d00-ace0-11eb-8bdf-2af7dd57b651.jpg'
  },
  {
    id: 4,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055592-f2238d00-ace0-11eb-8356-954fab3ad413.jpg'
  },
  {
    id: 5,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055594-f2238d00-ace0-11eb-9871-c66f8aae5407.jpg'
  },
  {
    id: 6,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055595-f2bc2380-ace0-11eb-9c19-52b33f47122a.jpg'
  },
  {
    id: 7,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055596-f2bc2380-ace0-11eb-9d7b-e75daf510a08.jpg'
  },
  {
    id: 8,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055645-fbacf500-ace0-11eb-8cbc-f495738696f0.jpg'
  },
  {
    id: 9,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055646-fbacf500-ace0-11eb-9460-b090be1e35f0.png'
  },
  {
    id: 10,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055647-fbacf500-ace0-11eb-9d2e-4ed986b0cb22.jpg'
  },
  {
    id: 11,
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055597-f2bc2380-ace0-11eb-8032-1ad5b123b4b4.jpg'
  },
  {
    id: 12,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055599-f2bc2380-ace0-11eb-9b21-ef4481b8d2ba.jpg'
  },
  {
    id: 13,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055600-f2bc2380-ace0-11eb-989f-05a0474e3a35.jpg'
  },
  {
    id: 14,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055603-f354ba00-ace0-11eb-92a8-d9098cd12c48.jpg'
  },
  {
    id: 15,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055604-f354ba00-ace0-11eb-9e06-b7ae0d51a395.jpg'
  },
  {
    id: 16,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055605-f354ba00-ace0-11eb-8c5c-d6a33a73e682.jpg'
  },
  {
    id: 17,
    firstName: 'Lindsey',
    lastName: 'Satterfiled',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055648-fbacf500-ace0-11eb-999d-8fca590b4e34.jpg'
  },
  {
    id: 18,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055602-f2bc2380-ace0-11eb-952c-6feb08879dfc.png'
  },
  {
    id: 19,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117056944-7cb8bc00-ace2-11eb-848f-230f80f29604.jpg'
  },
  {
    id: 20,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117056951-7e827f80-ace2-11eb-928a-07e81ade0999.png'
  },
  {
    id: 21,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055650-fc458b80-ace0-11eb-84d3-91f7f8bae73e.jpg'
  },
  {
    id: 23,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055649-fc458b80-ace0-11eb-9cb0-a4cde11f4a7f.png'
  },
  {
    id: 24,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055606-f354ba00-ace0-11eb-8ac4-0063c60c9902.jpg'
  },
  {
    id: 25,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false,
    image: 'https://user-images.githubusercontent.com/76187279/117055607-f354ba00-ace0-11eb-94fb-20e493a7d28c.jpg'
  }
];

const getLivingStudents = () => students.filter((student) => student.isDead === false);

const dearlyBeloved = () => students.filter((student) => student.isDead === true);

const followTheLight = () => {
  const currentLiveStudents = getLivingStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * students.length)];
  const index = students.indexOf(randomStudent);
  students[index].isDead = true;
  console.warn(randomStudent);
};

export {
  getLivingStudents,
  dearlyBeloved,
  followTheLight,
};
