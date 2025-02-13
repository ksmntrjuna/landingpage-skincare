import about2 from "../assets/about.jpeg";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8">
      <div className="container mx-auto space-y-16 p-6">
        {/* Judul utama */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold font-mono">Tentang Kami</h2>
        </div>

        {/* Bagian pertama: Siapa Kita */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src={about2}
            alt="Siapa Kita"
            className="w-full md:w-1/3 h-auto rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left md:w-2/3 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-4 font-mono">
              Siapa Kita?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              bibendum purus. Fusce elementum neque nec mauris vehicula, sed
              bibendum augue placerat. Vestibulum quis orci erat. Curabitur
              tempor sem sit amet quam efficitur euismod. Sed feugiat eget neque
              sed facilisis. Etiam suscipit, dolor vitae maximus pulvinar, enim
              justo suscipit tellus, in fringilla massa leo at ligula. Quisque
              sit amet justo id risus dignissim aliquam. Curabitur laoreet
              sagittis pharetra. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Aenean porttitor
              ligula sapien.
            </p>
          </div>
        </div>

        {/* Bagian kedua: Visi */}
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
          <img
            src={about2}
            alt="Visi Kami"
            className="w-full md:w-1/3 h-auto rounded-lg shadow-lg mb-6 md:mb-0 md:ml-8"
          />
          <div className="text-center md:text-left md:w-2/3 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-4 font-mono">Visi Kami</h2>
            <p className="text-lg sm:text-xl text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              bibendum purus. Fusce elementum neque nec mauris vehicula, sed
              bibendum augue placerat. Vestibulum quis orci erat. Curabitur
              tempor sem sit amet quam efficitur euismod. Sed feugiat eget neque
              sed facilisis. Etiam suscipit, dolor vitae maximus pulvinar, enim
              justo suscipit tellus, in fringilla massa leo at ligula. Quisque
              sit amet justo id risus dignissim aliquam. Curabitur laoreet
              sagittis pharetra. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Aenean porttitor
              ligula sapien.
            </p>
          </div>
        </div>

        {/* Bagian ketiga: Misi */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src={about2}
            alt="Misi Kami"
            className="w-full md:w-1/3 h-auto rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left md:w-2/3 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-4 font-mono">Misi Kami</h2>
            <p className="text-lg sm:text-xl text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              bibendum purus. Fusce elementum neque nec mauris vehicula, sed
              bibendum augue placerat. Vestibulum quis orci erat. Curabitur
              tempor sem sit amet quam efficitur euismod. Sed feugiat eget neque
              sed facilisis. Etiam suscipit, dolor vitae maximus pulvinar, enim
              justo suscipit tellus, in fringilla massa leo at ligula. Quisque
              sit amet justo id risus dignissim aliquam. Curabitur laoreet
              sagittis pharetra. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Aenean porttitor
              ligula sapien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
