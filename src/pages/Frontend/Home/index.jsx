import {
    FaGraduationCap,
    FaHeartbeat,
    FaHandHoldingHeart,
    FaLaptopCode,
    FaUsers,
    FaMapMarkerAlt,
    FaBookOpen,
    FaDonate,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold">
                                Welcome to{" "}
                                <span className="text-success">
                                    Saylani Welfare
                                </span>
                            </h1>

                            <p className="lead text-muted mt-3">
                                Empowering lives through education,
                                healthcare, food support, and skill
                                development programs.
                            </p>

                            <div className="d-flex gap-3 mt-4 flex-wrap">
                                <Link to="/auth/login" className="btn btn-success btn-lg">
                                    Sign In
                                </Link>
                                <Link to="/auth/register" className="btn btn-outline-success btn-lg">
                                    Sign Up
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                                alt="Web Development"
                                className="img-fluid rounded-4 shadow"
                                style={{
                                    width: "100%",
                                    height: "clamp(250px, 40vw, 500px)",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm text-center p-4 h-100">
                                <FaUsers
                                    size={45}
                                    className="text-success mx-auto mb-3"
                                />
                                <h2 className="fw-bold">300K+</h2>
                                <p className="mb-0">Students Trained</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm text-center p-4 h-100">
                                <FaBookOpen
                                    size={45}
                                    className="text-success mx-auto mb-3"
                                />
                                <h2 className="fw-bold">500+</h2>
                                <p className="mb-0">Courses Offered</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm text-center p-4 h-100">
                                <FaMapMarkerAlt
                                    size={45}
                                    className="text-success mx-auto mb-3"
                                />
                                <h2 className="fw-bold">50+</h2>
                                <p className="mb-0">Cities Covered</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm text-center p-4 h-100">
                                <FaDonate
                                    size={45}
                                    className="text-success mx-auto mb-3"
                                />
                                <h2 className="fw-bold">1M+</h2>
                                <p className="mb-0">Beneficiaries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5">
                        Our Services
                    </h2>

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center p-4">
                                <FaGraduationCap
                                    size={55}
                                    className="text-success mx-auto mb-3"
                                />

                                <h4>Education</h4>

                                <p className="text-muted">
                                    Providing quality education and
                                    scholarships for deserving students.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center p-4">
                                <FaHeartbeat
                                    size={55}
                                    className="text-success mx-auto mb-3"
                                />

                                <h4>Healthcare</h4>

                                <p className="text-muted">
                                    Free healthcare facilities and
                                    medical assistance programs.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center p-4">
                                <FaHandHoldingHeart
                                    size={55}
                                    className="text-success mx-auto mb-3"
                                />

                                <h4>Food Support</h4>

                                <p className="text-muted">
                                    Monthly ration distribution and
                                    food support initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5">
                        Popular IT Courses
                    </h2>

                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body text-center">
                                    <FaLaptopCode
                                        size={45}
                                        className="text-success mb-3"
                                    />
                                    <h5>Web Development</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body text-center">
                                    <FaLaptopCode
                                        size={45}
                                        className="text-success mb-3"
                                    />
                                    <h5>Graphic Design</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body text-center">
                                    <FaLaptopCode
                                        size={45}
                                        className="text-success mb-3"
                                    />
                                    <h5>Digital Marketing</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body text-center">
                                    <FaLaptopCode
                                        size={45}
                                        className="text-success mb-3"
                                    />
                                    <h5>AI & Data Science</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation CTA */}
            <section className="bg-success text-white py-5">
                <div className="container text-center">
                    <h2 className="fw-bold">
                        Your Donation Can Change Lives
                    </h2>

                    <p className="lead mt-3">
                        Support education, healthcare, food
                        distribution and welfare programs.
                    </p>

                    <button className="btn btn-warning btn-lg mt-3">
                        Donate Today
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;