import Image from "next/image";
import image from "@/assets/images/image-omelette.jpeg";

export default function Home() {
  return (
    <main className="bg-white mx-auto max-w-xs sm:max-w-2xl rounded-lg flex flex-col items-center gap-4  sm:mt-24  md:py-8 ">
      <div className="md:px-5">
        <Image src={image} alt="omelette" className="md:rounded-xl w-full h-auto" />
      </div>
      <div className="px-8 md:px-10">
        <h1
          className="text-4xl font-young tracking-tight
      text-charcoal py-5"
        >
          Simple Omelette Recipe
        </h1>
        <p
          className="text-brown font-outfit mb-8">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="font-outfit w-full bg-rose rounded-xl p-5 flex flex-col gap-y-3">
          <h3 className="text-raspberry text-xl font-medium">
            Preparation time
          </h3>
          <ul className="custom-list-time px-6 flex flex-col gap-y-2">
            <li>
              <b>Total:</b> Approximately 10 minutes
            </li>
            <li>
              <b>Preparation:</b> 5 minutes
            </li>
            <li>
              <b>Cooking:</b> 5 minutes
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-3 pt-5">
          <h2
            className="text-nutmeg text-2xl font-semibold font-young">
            Ingredients
          </h2>
          <ul className="custom-list-ingredients font-outfit px-5 flex flex-col gap-y-2">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced, vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <span className="w-full h-[1px] bg-grey flex my-7"></span>

        <div className="flex flex-col gap-y-3">
          <h2 className="text-nutmeg text-2xl font-semibold font-young">
            Instructions
          </h2>
          <ul className="custom-list-instructions font-outfit px-5 flex flex-col gap-y-2">
            <li>
              <b>Beat the eggs: </b>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </li>
            <li>
              <b>Heat the pan: </b>
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li>
              <b>Cook the omelette: </b>
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <b>Add fillings (optional): </b>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the
            </li>
            <li>
              <b>Fold and serve: </b>
              As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </li>
            <li>
              <b>Enjoy: </b>
              Serve hot, with additional salt and pepper if needed.
            </li>
          </ul>
        </div>

        <span className="w-full h-[1px] bg-grey flex my-7"></span>

        <div className="flex flex-col gap-y-3">
          <h2
            className="text-nutmeg text-2xl font-semibold font-young">
            Nutrition
          </h2>
          <p className="text-brown font-outfit">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div
            className="text-brown font-outfit
        flex flex-col gap-y-3 pb-8 md:pb-0"
          > 
            <div className="flex">
              <span className="flex-1">Calories</span>
              <span className="text-raspberry font-semibold flex-1">
                277kcal
              </span>
            </div>

            <span className="w-full h-[1px] bg-grey flex"></span>

            <div className="flex">
              <span className="flex-1">Carbs</span>
              <span className="text-raspberry font-semibold flex-1">0g</span>
            </div>

            <span className="w-full h-[1px] bg-grey flex"></span>

            <div className="flex">
              <span className="flex-1">Protein</span>
              <span className="text-raspberry font-semibold flex-1">20g</span>
            </div>

            <span className="w-full h-[1px] bg-grey flex"></span>

            <div className="flex">
              <span className="flex-1">Fat</span>
              <span className="text-raspberry font-semibold flex-1">22g</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
