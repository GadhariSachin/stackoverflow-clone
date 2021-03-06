import { shallowMount } from "@vue/test-utils";
import UserProfileComponent from "@/components/UserProfileComponent.vue";

describe("UserProfileComponent.vue", () => {
  it("renders props.profileData when passed", () => {
    const profileData = "12";
    const wrapper = shallowMount(UserProfileComponent, {
      propsData: { profileData },
    });
    expect(wrapper.text()).toMatch(`This is user ${profileData}`);
  });
});
