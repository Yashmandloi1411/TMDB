import axios from "../../utils/axios";

import { loadperson } from "../reducers/personSlice";

export { removeperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getstate) => {
  console.log("async call with id");
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);

    const tvCredits = await axios.get(`/person/${id}/tv_credits`);

    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    //const recommendations = await axios.get(`/person/${id}/recommendations`);
    //const similar = await axios.get(`/person/${id}/similar`);
    // const videos = await axios.get(`/person/${id}/videos`);
    // const translations = await axios.get(`/person/${id}/translations`);
    //const watchproviders = await axios.get(`/person/${id}/watch/providers`);

    let theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,

      //   recommendations: recommendations.data.results,
      //   similar: similar.data.results,
      //   translations: translations.data.translations.map((t) => t.english_name),
      //   videos: videos.data.results.find((m) => m.type === "Trailer"),
      //   watchproviders: watchproviders.data.results.IN,
    };

    dispatch(loadperson(theultimatedetails));
    console.log(theultimatedetails);
  } catch (err) {
    console.log("Error:", err);
  }
};
