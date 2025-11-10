import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Survey = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [qualified, setQualified] = useState(true);
  const [finished, setFinished] = useState(false);
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
});

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [agree, setAgree] = useState(false);

  const questions = [
    {
      type: "multiple",
      question:
        "Are you currently receiving social security disability benefits?",
      options: ["Yes", "No"],
      key: "working_status",
    },
    {
      type: "multiple",
      question:
        "Are you out of work for atleast a year due to an injury or disability?",
      options: ["Yes", "No"],
      key: "work_hours",
    },
    {
      type: "multiple",
      question: "Have you worked atleast 5 out of the last 10 years?",
      options: ["Yes", "No"],
      key: "job_duration",
    },
    {
      type: "multiple",
      question:
        "Have you seen a doctor for this specific issue in the past year?",
      options: ["Yes", "No"],
      key: "work_years",
    },

    {
      type: "multiple",
      question: "Are you currently working with a lawyer on this case?",
      options: ["Yes", "No"],
      key: "lawyer_status",
    },
    {
      type: "form",
    },
  ];

  useEffect(() => {
    const existing = document.getElementById("LeadiDscript");
    if (!existing) {
      const s = document.createElement("script");
      s.id = "LeadiDscript";
      s.type = "text/javascript";
      s.async = true;
      s.innerHTML = `
        (function() {
          var s = document.createElement('script');
          s.id = 'LeadiDscript_campaign';
          s.type = 'text/javascript';
          s.async = true;
          s.src = '//create.lidstatic.com/campaign/cc646acd-e437-e89d-0268-c2f00a16645e.js?snippet_version=2';
          var LeadiDscript = document.getElementById('LeadiDscript');
          LeadiDscript.parentNode.insertBefore(s, LeadiDscript);
        })();
      `;
      document.body.appendChild(s);
    }
  }, []);

  const handleAnswer = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    // Disqualify conditions
    if (key === "work_years" && value === "No") {
      setQualified(false);
      setFinished(true);
      return;
    }

    if (key === "lawyer_status" && value === "Yes") {
      setQualified(false);
      setFinished(true);
      return;
    }

    // ✅ After last question, go to the form step instead of finishing
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // instead of finishing, show form step
      setStep(step + 1); // 👈 this goes to the "form" type question
    }
  };

  // 🟦 Handle form submission
 const handleFormSubmit = async (e) => {
  e.preventDefault();

  // ✅ Basic validation
  if (!agree) {
    alert("Please agree to the terms before submitting.");
    return;
  }

  // ✅ Build lead payload
  const leadPayload = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    dob: formData.dob.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    address: formData.address.trim(),
    city: formData.city.trim(),
    state: formData.state.trim(),
    zip: formData.zip.trim(),
    answers, // if you have survey answers
    leadid_token: document.getElementById("leadid_token")?.value || "",
  };

  try {
    console.log("📤 Submitting Lead Data:", leadPayload);

    const response = await fetch(
      "https://lead-proxy-server.onrender.com/api/submit-lead",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      }
    );

    if (!response.ok) {
      throw new Error("CORS block or API error");
    }

    console.log("✅ Lead submitted successfully");
    window.location.href = "/thank-you"; // redirect after success
  } catch (error) {
    console.warn("⚠️ Lead submission failed:", error.message);
    console.log("Redirecting to success page for demo...");
    window.location.href = "/thank-you"; // fallback redirect
  }
};


  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#001A54] px-6 py-10">
      <div className="max-w-2xl w-full text-center">
        {/* FINAL MESSAGE */}
        {finished && formSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-green-700">
              Your chances of qualifying: High ✅
            </h1>
            <p className="text-lg text-gray-700">
              We’re closed now, but call us any time between <br />
              <strong>6:30 PM and 8:30 AM Monday – Friday</strong> at <br />
              <span className="font-bold text-[#001A54]">(800) 674-8141</span>.
              <br />
              We’ll help you apply for benefits.
            </p>
            <button
              onClick={() => {
                setStep(0);
                setFinished(false);
                setQualified(true);
                setAnswers({});
                setName("");
                setFormSubmitted(false);
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                });
              }}
              className="mt-6 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Start Over
            </button>
          </motion.div>
        )}

        {/* IF DISQUALIFIED */}
        {finished && !qualified && !formSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {answers.lawyer_status === "Yes" ? (
              <>
                <h1 className="text-4xl font-bold text-sky-600">
                  You’re already working with a lawyer 👏
                </h1>
                <p className="text-lg text-gray-700">
                  That’s great! We wish you the best with your
                  DisabilityClaimAssist . If you ever need more assistance or a
                  second opinion, our team is here for you.
                </p>
                <div>
                  <button
                    onClick={() => {
                      setStep(0);
                      setFinished(false);
                      setQualified(true);
                      setAnswers({});
                      setName("");
                      setFormSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                      });
                    }}
                    className="mt-6 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Start Over
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold text-red-600">
                  We’re sorry 😔
                </h1>
                <p className="text-lg text-gray-700">
                  Based on your answers, you might not currently qualify. But
                  feel free to contact our team for help.
                </p>
                <button
                  onClick={() => {
                    setStep(0);
                    setFinished(false);
                    setQualified(true);
                    setAnswers({});
                  }}
                  className="mt-6 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                >
                  Connect with Atticus (It's 100% Free!)
                </button>
              </>
            )}
          </motion.div>
        )}

        {/* QUESTIONS FLOW */}
        {!finished && (
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {questions[step].type === "multiple" && (
                <>
                  <h1 className="text-2xl md:text-3xl font-bold mb-8">
                    {questions[step].question}
                  </h1>
                  <div className="space-y-4">
                    {questions[step].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(questions[step].key, opt)}
                        className="w-full border border-gray-300 rounded-lg py-3 text-lg font-medium 
             transition-all duration-300 ease-in-out 
             hover:bg-red-600 hover:text-white hover:border-blue-500 
             hover:-translate-x-2 hover:-translate-y-2"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {questions[step].type === "form" && (
 <form
  onSubmit={handleFormSubmit}
  className="space-y-6 text-left bg-white shadow-md rounded-xl p-8"
>
  {/* Hidden Jornaya field */}
  <input id="leadid_token" name="universal_leadid" type="hidden" value="" />

  {/* Name Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        First <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Last <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none"
      />
    </div>
  </div>

  {/* DOB */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      DOB <span className="text-red-500">*</span>
    </label>
    <input
      type="date"
      value={formData.dob}
      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
      required
      className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none"
    />
  </div>

  {/* Phone + Email */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Phone <span className="text-red-500">*</span>
      </label>
      <input
        type="tel"
        pattern="[0-9]{10}"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none"
      />
    </div>
  </div>

  {/* Street Address */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Street Address <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      value={formData.address}
      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      required
      className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none"
    />
  </div>

  {/* City / State / Zip */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        City <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        State <span className="text-red-500">*</span>
      </label>
      <select
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full bg-white focus:ring-2 focus:ring-red-500 outline-none"
      >
        <option value="">Select State</option>
        <option value="CA">California</option>
        <option value="TX">Texas</option>
        <option value="FL">Florida</option>
        <option value="NY">New York</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Zip <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none"
      />
    </div>
  </div>

  {/* Agreement Checkbox */}
  <label className="flex items-start space-x-2 text-sm text-gray-600">
    <input
      type="checkbox"
      checked={agree}
      onChange={(e) => setAgree(e.target.checked)}
      className="mt-1"
      required
    />
    <span>
      By checking this box, I confirm that I have read and agree to the{" "}
      <a href="/privacy" className="text-red-600 underline">
        Privacy Policy
      </a>{" "}
      and Terms of Service.
    </span>
  </label>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition w-full font-semibold shadow-sm"
  >
    Submit & Continue →
  </button>

  {/* Disclaimer */}
  <div className="bg-black text-white text-xs p-4 rounded-md leading-relaxed mt-4">
    By pressing the “Submit” button above, I provide my express written consent
    to be contacted by phone, email, or text regarding disability benefits,
    even if my number is on a do-not-call list. I understand I am not required
    to provide consent as a condition of purchase.
  </div>
</form>

)}

            </motion.div>
          </AnimatePresence>
        )}

        {!finished && (
          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrev}
              disabled={step === 0}
              className={`text-gray-600 hover:text-red-600 ${
                step === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              ← Previous
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Survey;
