import Image from "next/image";

const Aboutdata = [
    // {
    //     imgSrc: "/assets/network/bangladesh.svg",
    //     country: "Bangladesh",
    //     paragraph: 'Embracing data compliance initiatives, fostering innovation, and bringing together tech enthusiasts across the continent.',
    // },
    {
        imgSrc: "/assets/network/america.svg",
        country: "United States",
        paragraph: 'Leading the way in data compliance efforts, hosting events that unite innovators and tech enthusiasts in the pursuit of excellence.',
    },
    {
        imgSrc: "/assets/network/australia.svg",
        country: "Australia",
        paragraph: 'Driving a surge in data compliance events, where innovation thrives, and tech enthusiasts collaborate for a secure digital future.',
    },
    {
        imgSrc: "/assets/network/china.svg",
        country: "China",
        paragraph: 'Fostering a culture of data compliance, hosting events that inspire innovation and bring together passionate tech enthusiasts.',
    },
];

const Network = () => {
    return (
        <div className="bg-babyblue" id="company">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">Data compliance policies<br />are all over the world</h3>

                <Image src={'/assets/network/map.png'} alt={"map-image"} width={1400} height={800} />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 '>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 shadow-xl dark:bg-trueGray-800'>
                            <div className="flex justify-start items-center gap-2 " >
                                <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                                <h4 className="text-xl font-medium text-midnightblue" >{item.country}</h4>
                            </div>
                            <hr />
                            <h4 className='text-lg font-normal text-bluegrey my-2'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Network;
