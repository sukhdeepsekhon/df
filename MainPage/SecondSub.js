import Image from 'next/image';
import Frame72 from '@/MainPage/Images/Frame 72.svg';  // Assuming your images are stored in the public folder
import Physics1 from '@/MainPage/Images/physics 1.svg';
import Frame74 from '@/MainPage/Images/Frame 74.svg';
import "@/MainPage/Stylesheet/SecondSub.css";

export default function MainBody() {
  return (
    <div className="MainBody2">
      <div className="Second">
        <div className="SD">
          <h1 className="Firstheading">
            Unlock the Confidence <br /> to Succeed in <br />
            Competitive Exams
          </h1>
          <h1 className="Secondheading">
            The path to top scores isn't just about studying harder—it’s about
            <br />
            preparing smarter. At Cavers, we understand the strategies you
            <br /> need to ace your exams and build the confidence required to
            <br /> stand out from the crowd.
          </h1>
        </div>

        <div className="up">
          <div className="third">
            <div className="left">
              <div className="FirstLeft">
                <Image src={Frame72} alt="Tailored Test Series Icon" />
              </div>
              <div className="FirstRight">
                <h1 className="FR1">Tailored Test Series</h1>
                <h2 className="FR2">
                  Test content designed to challenge and build confidence in
                  real exam conditions.
                </h2>
              </div>
            </div>
            <div className="left">
              <div className="FirstLeft">
                <Image src={Physics1} alt="Progressive Learning Icon" />
              </div>
              <div className="FirstRight">
                <h1 className="FR1">Progressive Learning</h1>
                <h2 className="FR2">
                  Questions that take you one step ahead, ensuring you’re always
                  prepared for what’s next.
                </h2>
              </div>
            </div>
            <div className="left">
              <div className="FirstLeft">
                <Image src={Frame74} alt="Focused Practice Icon" />
              </div>
              <div className="FirstRight">
                <h1 className="FR1">Focused Practice</h1>
                <h2 className="FR2">
                  Detailed analysis and improvement recommendations to boost your
                  performance.
                </h2>
              </div>
            </div>
          </div>

          <div className="GreatBox">
            <div className="borderbox">
              <div className="bbleft">
                <p className="bb1">3</p>
                <div className="upbb">
                  <p className="bb2">Years</p>
                  <p className="bb3">of Expertise</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="right">
                <p className="bb1">40+</p>
                <div className="upbb">
                  <p className="bb2">Tailored</p>
                  <p className="bb3">Test Series</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
