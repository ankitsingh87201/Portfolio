import React from 'react';

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: '/html.png',
      name: 'HTML',
    },
    {
      id: 2,
      logo: '/css.jpeg',
      name: 'CSS',
    },
    {
      id: 3,
      logo: '/js.png',
      name: 'JavaScript',
    },
    {
      id: 4,
      logo: '/nodejs.png',
      name: 'Node JS',
    },
    {
      id: 5,
      logo: '/paython.jpeg',
      name: 'Python',
    },
    {
      id: 6,
      logo: '/reactjs.png',
      name: 'React JS',
    },
    {
      id: 7,
      logo: '/mongodb.png',
      name: 'MongoDB',
    },
  ];

  return (
    <div name="Experiance"  className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p>I've more experience in the below technologies</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300 md:w-[200px] md:h-[200px]"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt={name} />
              <div>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
