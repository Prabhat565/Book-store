import React from "react";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center flex-col bg-cyan-950 max-w-7xl">
      <h1 className="text-3xl font-bold mb-4 text-[aquamarine] underline">
        About Us
      </h1>
      <p className="mb-4 text-[#fff] text-justify">
        This is the About Us page content. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. <br />
        Alias voluptate ipsam ratione eum eos quo facilis possimus pariatur
        temporibus dicta nulla similique, inventore hic sunt aliquid unde
        dolorem eveniet eaque illum eligendi maxime nobis et! Laudantium autem
        laboriosam consectetur ad possimus expedita aspernatur quibusdam quo
        fuga vitae! Sequi molestiae error odit ducimus nulla nam veritatis
        explicabo fuga, quibusdam aspernatur asperiores dignissimos eius
        necessitatibus, quae blanditiis? Obcaecati sit totam ea unde quia
        numquam beatae ut? Repellendus fuga error placeat eum commodi.
      </p>

      <h2 className="text-2xl font-bold mb-2 underline text-[aquamarine]">
        Our Story
      </h2>
      <p className="mb-4 text-[#fff]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit
        risus quis elit ullamcorper tempus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Totam quisquam est fugit enim quas veniam
        ratione, dignissimos voluptates blanditiis soluta quae hic. Ducimus vero
        aspernatur asperiores, placeat magnam eum saepe quis accusamus repellat
        excepturi magni sed temporibus ipsa reiciendis, dignissimos architecto
        beatae itaque illo eius voluptatibus aut soluta! Aut itaque quis
        tempore, delectus officiis ad tempora nostrum quos eligendi. Accusamus
        vero maxime velit voluptas blanditiis magni debitis ab vitae
        voluptatibus rem, repudiandae reiciendis quia corrupti delectus
        molestias mollitia itaque commodi quis fuga, veritatis illum illo nulla
        assumenda! Ducimus dolor aliquam tenetur a, quisquam quod saepe?
        Reiciendis in aliquid dolore veniam. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Doloremque repellat eaque libero dicta
        nulla voluptatum temporibus nostrum facilis nam veritatis explicabo
        incidunt accusantium, dolorum enim numquam ea exercitationem
        reprehenderit at repellendus voluptatem quos architecto quam? Doloremque
        quidem pariatur totam mollitia amet eius eum explicabo porro harum quae
        voluptatum magni nulla ipsum atque repellat fugiat, optio, ratione,
        repellendus neque. Laborum, error. Magnam atque repellat neque provident
        sed officia corporis qui incidunt ad suscipit adipisci, iusto sequi quis
        laborum asperiores sit doloremque in praesentium esse! Voluptas animi
        distinctio porro reiciendis nobis quod, quos minus consequatur. At,
        quasi id! Aspernatur culpa eligendi ea reprehenderit impedit, iusto
        sequi labore cumque beatae maiores. Consequuntur animi veniam id,
        doloremque fuga, natus, in aperiam hic qui vel nemo minus voluptatum
        veritatis magni! Eius nam, dolore nostrum ea veritatis quas
        necessitatibus aliquam harum repellat in dicta molestias. Libero
        delectus laboriosam quidem repellendus odio accusamus saepe atque
        laudantium culpa totam a illum quo qui, consectetur vitae temporibus,
        error molestiae asperiores labore distinctio neque earum unde quas!
        Iusto voluptatibus ullam harum repudiandae quam ipsam, explicabo
        deleniti inventore tenetur consectetur consequuntur, vero a quaerat
        porro quo qui assumenda sequi provident eveniet necessitatibus,
        exercitationem nesciunt! Delectus, reiciendis molestiae? Laudantium
        corrupti ratione unde?
      </p>

      <h2 className="text-2xl font-bold mb-2 underline text-[aquamarine]">
        Our Mission
      </h2>
      <p className="mb-4 text-[#fff]">
        Our mission is to provide quality books to our customers and promote
        reading culture. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur et
        quis facere sequi, distinctio, ad doloribus odio voluptatem vero dolores
        dolorum vitae iusto nisi magnam in laboriosam quibusdam. Laboriosam rem
        nihil, enim aut aspernatur nostrum dolorum omnis laudantium excepturi
        repellendus molestias itaque. Doloremque itaque iure tenetur facere qui
        obcaecati, odit fugit inventore officia corrupti omnis odio
        reprehenderit amet a iusto, perferendis dolorem voluptates minus
        voluptatum molestias nesciunt. Exercitationem dignissimos eligendi
        accusantium porro. Sed veniam aut nam nesciunt in corrupti reprehenderit
        quam quasi, delectus id quaerat rerum molestiae cumque excepturi.
        Voluptas expedita rerum nisi necessitatibus, doloribus quis vitae
        tempore natus, suscipit nobis quaerat optio id mollitia, minima unde
        nihil libero dolorum ratione. Suscipit delectus ad quo repellat .
      </p>

      <h2 className="text-2xl font-bold mb-2 underline text-[aquamarine]">
        Most popular books in our Bookstore:
      </h2>
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="border p-4 rounded-lg shadow">
            <img
              className="mb-2"
              src="https://i.ytimg.com/vi/nfK6UgLra7g/maxresdefault.jpg"
              alt="Book Cover"
            />
            <h3 className="text-xl text-[#fff] font-bold mb-2">Silent Voice</h3>
            <p className="text-[#fff] mb-1">Anime</p>
            <p className="text-[#fff] mb-1">Price: $10</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="border p-4 rounded-lg shadow">
            <img
              className="mb-2"
              src="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpe"
              alt="Book Cover"
            />
            <h3 className="text-xl text-[#fff] font-bold mb-2">
              Naruto Shippudin Title
            </h3>
            <p className="text-[#fff] mb-1">Manga book</p>
            <p className="text-[#fff] mb-1">Price: $12</p>
          </div>
        </div>
        {/* Add more books as needed */}
      </div>

      <Link to="/" className="text-blue-500">
        Go back to Home
      </Link>
    </div>
  );
};

export default About;
