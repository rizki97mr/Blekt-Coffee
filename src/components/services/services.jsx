import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    Image: Coffee1,
    title: "Cofee Espresso",
    description:
      "Espresso is a concentrated shot of coffee, providing a strong and intense flavor. It is made using finely ground coffee beans and hot water, resulting in a rich and bold taste.",
  },
  {
    id: 2,
    Image: Coffee1,
    title: "Hot Cofee",
    description:
      "Espresso is a concentrated shot of coffee, providing a strong and intense flavor. It is made using finely ground coffee beans and hot water, resulting in a rich and bold taste.",
  },
  {
    id: 1,
    Image: Coffee3,
    title: "Cofee Latte",
    description:
      " lattes are made by adding steamed milk to a shot of espresso, creating a smoother and creamier flavor.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // increase duration for smoother animation
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4, // delay between animations
    },
  },
};

const services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="max-w-lg mx-auto space-y-2 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty cofee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Coffee beans are picked when they are green, then roasted to bring out
          their flavor. How long they are roasted, and at how high a
          temperature, affects how they taste. And their taste can help
          determine whether you like drinking them without creamer or sweetener.
        </motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
      >
        {servicesData.map((service) => (
          <motion.div
            variants={cardVariants}
            key={service.id}
            className="p-4 space-y-6 text-center"
          >
            <img
              src={service.Image}
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
              alt={""}
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-primary">
                {service.title}
              </h2>
              <p className="text-sm text-darkGray">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default services;
