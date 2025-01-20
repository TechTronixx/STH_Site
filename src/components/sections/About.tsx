import { motion } from "framer-motion";
import trumpabout from "@/assets/t5.png";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">
            About <span className="text-goldAccent">$STH</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-goldAccent"></div>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={trumpabout}
              alt="About SolTimeHigh"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              repellendus illum fugit magnam perferendis consectetur ipsum dicta
              ratione dolorum ab doloribus eos illo quas adipisci nulla sapiente
              blanditiis ipsam vitae facere fugiat. Excepturi, ducimus
              voluptatum. Deserunt dignissimos deleniti facere, perferendis
            </p>
            <p>
              saepe nulla officia ipsum corrupti incidunt eligendi
              necessitatibus repellendus numquam cum neque molestiae dolor eius
              atque in fugit odio, quasi porro praesentium excepturi velit,
              nesciunt exercitationem nostrum maiores, quidem error. Sapiente!
            </p>
            <p>
              Our team consists of experienced developers, marketers, and
              community managers who are dedicated to the project's long-term
              success and continuous evolution.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
