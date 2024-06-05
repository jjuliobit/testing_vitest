import About from "@/views/About.vue";
import { shallowMount } from "@vue/test-utils";
import { getByData } from "./Utils/getByData";

describe("About.vue", () => {
  test("renders inner text", () => {
    const wrapper = shallowMount(About);

    const aboutHeading = getByData(wrapper, "about-heading");

    expect(aboutHeading.text()).toContain("about");
  });
});
