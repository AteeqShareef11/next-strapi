import qs from "qs";
import { flattenAttributes } from "@/app/lib/utils";


const STRAPI_URL = process.env.STRAPI_URL;


export async function fetchFeatures() {
  // const authToken = cookies().get("jwt")?.value;
  // if (!authToken) return redirect("/login");

 const query = qs.stringify({
    populate: {
      fields: ["id", "title", "description", "image"],
      image: {
        fields: ["url"] // Ensure the image URL field is included
      }
    },
  });
  try {
    const data = await fetch(STRAPI_URL + "/api/features?" + query, {
      // headers: { Authorization: "Bearer " + authToken },
    });
    const feature = await data.json();
    console.log(feature);
    const flatten = flattenAttributes(feature.data);
    return flatten;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all features.");
  }
}
