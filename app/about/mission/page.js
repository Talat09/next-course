import Button from "@/app/components/Button";
//@(root folder) is default import alias
import Image from "next/image";
import thumb from "@/public/images/Talat-Mahmud.jpg";
const page = () => {
  return (
    <main className="mt-10 ">
      <div className="text-4xl font-semibold"> Mission Page</div>
      <hr />

      <div>
        <p className="my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          nostrum porro error, laborum ad minima fuga aliquam nisi hic cumque,
          corporis iure quis tempora? Reprehenderit delectus repellat officiis
          facere totam nam, veritatis aliquam earum iure debitis. Dolor
          pariatur, optio amet laboriosam rerum corporis fugit ex natus.
          Assumenda sapiente maiores quisquam!
        </p>

        <Image placeholder="blur" src={thumb} alt="Thumb image" />
      </div>

      <Button></Button>
    </main>
  );
};

export default page;
//onclick use client site components
