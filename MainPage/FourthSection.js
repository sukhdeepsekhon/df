// components/Testimonials.js
import Image from 'next/image';
import amit from "@/MainPage/Images/amit.jpg"
import riya from "@/MainPage/Images/riya.jpg"
import rahul from "@/MainPage/Images/rahul.jpg"
import sanya from "@/MainPage/Images/sanya.jpg"

const Testimonials = () => {
    // Define styles as a JavaScript object
    const styles = {
        section: {
            textAlign: 'center',
            padding: '20px',
        },
        heading: {
            fontSize: '24px',
            marginBottom: '20px',
        },
        upcard: {
            display: 'flex',
            gap: '50px',
            justifyContent: 'center',
            flexWrap: 'wrap', // Allows cards to wrap on smaller screens
        },
        testimonialCard: {
            display: 'flex',
            flexDirection: 'column',
            width: '250px',
            height: '250px',
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            justifyContent: 'space-between',
            margin: '10px', // Space between cards
        },
        testimonialText: {
            fontSize: '16px',
            color: '#475569',
            marginBottom: '20px',
            textAlign: 'justify',
        },
        profile: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        profileImage: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
        },
        grid: {
            display: 'flex',
            flexDirection: 'column',
        },
        name: {
            fontWeight: 'bold',
            fontSize: '18px',
            color: '#333',
        },
        designation: {
            fontSize: '14px',
            color: '#30b730',
        },
    };

    return (
        <section style={styles.section}>
            <h1 style={styles.heading}>What our students say.</h1>
            <div style={styles.upcard}>
                <div style={styles.testimonialCard}>
                    <p style={styles.testimonialText}>
                        The Cavers platform has been a game-changer for me. The questions are designed in such a way that they really help you think ahead. I feel much more confident about my JEE exams now.
                    </p>
                    <div style={styles.profile}>
                        <Image src={amit} alt="Amit Kapoor" width={50} height={50} style={styles.profileImage} />
                        <div style={styles.grid}>
                            <div style={styles.name}>Amit Kapoor</div>
                            <div style={styles.designation}>JEE Aspirant</div>
                        </div>
                    </div>
                </div>
                <div style={styles.testimonialCard}>
                    <p style={styles.testimonialText}>
                        The detailed explanations and step-by-step approach on Cavers have helped me tremendously. I've learned to approach difficult topics with confidence. Highly recommend for anyone serious about clearing UPSC.
                    </p>
                    <div style={styles.profile}>
                        <Image src={riya}  alt="Riya Sharma" width={50} height={50} style={styles.profileImage} />
                        <div style={styles.grid}>
                            <div style={styles.name}>Riya Sharma</div>
                            <div style={styles.designation}>UPSC Candidate</div>
                        </div>
                    </div>
                </div>
                <div style={styles.testimonialCard}>
                    <p style={styles.testimonialText}>
                        The test series on Cavers are excellent. They mimic the real exam, and the level of difficulty keeps me prepared for the worst-case scenarios. I love how structured everything is.
                    </p>
                    <div style={styles.profile}>
                        <Image src={rahul}  alt="Rahul Verma" width={50} height={50} style={styles.profileImage} />
                        <div style={styles.grid}>
                            <div style={styles.name}>Rahul Verma</div>
                            <div style={styles.designation}>NEET Aspirant</div>
                        </div>
                    </div>
                </div>
                <div style={styles.testimonialCard}>
                    <p style={styles.testimonialText}>
                        Cavers helped me improve my speed and accuracy. The mock tests are super challenging but ultimately helped me score higher than expected in the actual exam.
                    </p>
                    <div style={styles.profile}>
                        <Image src={sanya}  alt="Sanya Mehta" width={50} height={50} style={styles.profileImage} />
                        <div style={styles.grid}>
                            <div style={styles.name}>Sanya Mehta</div>
                            <div style={styles.designation}>SSC Exam Candidate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
