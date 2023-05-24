import TestimonislCarousel from "./TestimonislCarousel"
import avatarImg1 from "../../../Images/TestimonialImage/Profile (1).png"
import avatarImg2 from "../../../Images/TestimonialImage/Profile (2).png"
import avatarImg3 from "../../../Images/TestimonialImage/Profile.png"
import avatarImg4 from "../../../Images/TestimonialImage/luigi.png"
import avatarImg5 from "../../../Images/TestimonialImage/mario.png"
import avatarImg6 from "../../../Images/TestimonialImage/peach.png"
import avatarImg7 from "../../../Images/TestimonialImage/yoshi.png"
import TestimonialCard from "./TestimonialCard"

const TestimonialItem = () => {
    const items = [
      <TestimonialCard 
       heading={"Professional Partner"}
       testimonialText={"I am always on the look out for platforms that prioritize the user experience. Homify excceded my expectation"}
       AvatarImg={avatarImg1}
       nameDetails={"Lorri Warf"}
       occupation={"UX Designer"}
      />,
      <TestimonialCard 
        heading={"Incredible Experience"}
        testimonialText={"The seemless integration of features like assests managements has made my Job easier"}
        AvatarImg={avatarImg2}
        nameDetails={"David Elson"}
        occupation={"Developer"}
      />,
      <TestimonialCard 
        heading={"Dependable & Responsive"}
        testimonialText={"I have used several estate management, but none has come close to the level of service Homify has to offer"}
        AvatarImg={avatarImg3}
        nameDetails={"Ricky Smith"}
        occupation={"Business Woman"}
      />,
      <TestimonialCard 
      heading={"Professional Partner"}
      testimonialText={"I am always on the look out for platforms that prioritize the user experience. Homify excceded my expectation"}
      AvatarImg={avatarImg4}
      nameDetails={"Luigi"}
      occupation={"UX Designer"}
      />,
      <TestimonialCard
      heading={"Incredible Experience"}
        testimonialText={"The seemless integration of features like assests managements has made my Job easier"}
        AvatarImg={avatarImg5}
        nameDetails={"Mario"}
        occupation={"Developer"}
      />,
      <TestimonialCard 
      heading={"Dependable & Responsive"}
      testimonialText={"I have used several estate management, but none has come close to the level of service Homify has to offer"}
      AvatarImg={avatarImg6}
      nameDetails={"Peach"}
      occupation={"Business Woman"}
      />,
      <TestimonialCard 
      heading={"Professional Partner"}
      testimonialText={"I am always on the look out for platforms that prioritize the user experience. Homify excceded my expectation"}
      AvatarImg={avatarImg7}
      nameDetails={"Yoshi"}
      occupation={"UX Designer"}
      />,
    
    ]
  return (
    <TestimonislCarousel items ={items} />
  )
}

export default TestimonialItem
