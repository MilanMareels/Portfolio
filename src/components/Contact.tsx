import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    Swal.fire({
      title: "Bezig met verzenden...",
      text: "Een ogenblik geduld alstublieft.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const formData = new FormData(e.target as HTMLFormElement);
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      Swal.close();

      if (res.success) {
        Swal.fire({
          title: "Verzonden!",
          text: "Uw bericht is succesvol verzonden. Ik neem zo snel mogelijk contact op.",
          icon: "success",
          confirmButtonColor: "#155dfc",
          timer: 4000,
          timerProgressBar: true,
        });
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Web3Forms Error:", res.message);
        Swal.fire({
          title: "Fout!",
          text: res.message || "Er is iets misgegaan bij het verzenden.",
          icon: "error",
        });
      }
    } catch (error) {
      // Toon algemeen foutbericht (bijv. netwerkfout)
      console.error("Submission Error:", error);
      Swal.close();
      Swal.fire({
        title: "Fout!",
        text: "Kon de server niet bereiken. Probeer het later opnieuw.",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Graag bespreek ik met u hoe ik waarde kan toevoegen aan uw bedrijf. Neem gerust contact op.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Neem Contact Op</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <i className="fa fa-envelope text-blue-600 text-xl w-6"></i>
                  <span className="text-gray-700">milan.mareels@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fa fa-phone text-blue-600 text-xl w-6"></i>
                  <span className="text-gray-700">+32 489 50 36 61</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fa fa-map-marker text-blue-600 text-xl w-6"></i>
                  <span className="text-gray-700">België</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fa fa-globe text-blue-600 text-xl w-6"></i>
                  <a href="https://www.lannie.be" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    www.lannie.be
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Volg Mij</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/milan-mareels-58b472265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/MilanMareels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors cursor-pointer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_CONTACT_KEY} />

              <div>
                <label className="block text-gray-700 font-medium mb-2">Naam</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Uw volledige naam"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="uw.email@voorbeeld.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Onderwerp</label>
                <input
                  type="text"
                  name="subject" // <-- VEREIST voor Web3Forms
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Onderwerp van uw bericht"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Bericht</label>
                <textarea
                  name="message" // <-- VEREIST voor Web3Forms
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Uw bericht..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-button font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? "Bezig met verzenden..." : "Verstuur Bericht"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
