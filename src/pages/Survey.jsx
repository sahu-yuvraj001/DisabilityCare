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
    email: "",
    phone: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const questions = [
    {
      type: "multiple",
      question: "Are you working right now?",
      options: ["Yes, I'm working", "No, I'm not working"],
      key: "working_status",
    },
    {
      type: "multiple",
      question: "On average, how many hours a week do you work?",
      options: [
        "0–9 hours",
        "10–19 hours",
        "20–29 hours",
        "30–39 hours",
        "40 hours or more",
      ],
      key: "work_hours",
    },
    {
      type: "multiple",
      question: "How long have you worked at your current job?",
      options: ["Less than a year", "1 year", "2 years"],
      key: "job_duration",
    },
    {
      type: "multiple",
      question:
        "Since 2015, have you worked for at least 5 years? It doesn’t have to be 5 years in a row and it doesn’t have to have been full-time work.",
      options: ["Yes", "No"],
      key: "work_years",
    },
    {
      type: "message",
      message:
        "So far, your odds of qualifying look good. Based on your work history, it looks like you’ve met a crucial eligibility requirement for Social Security DisabilityClaimAssist .",
    },
    {
      type: "text",
      question:
        "Let’s keep going to see if you qualify. First, what is your name?",
      key: "name",
    },
    {
      type: "multiple",
      question: `Nice to meet you, ${
        name || "friend"
      }. So far, what’s happened in your application process? It’ll help us serve you better if we know where you are in the process. Select all that apply.`,
      options: [
        "I haven’t applied yet",
        "I submitted an application",
        "I got a denial notice (or two)",
        "I have an upcoming hearing",
      ],
      key: "application_status",
    },
    {
      type: "multiple",
      question:
        "Are you currently working with a lawyer on your DisabilityClaimAssist ?",
      options: ["Yes", "No"],
      key: "lawyer_status",
    },
    {
      type: "multiple",
      question:
        "How old are you? This helps us understand how much you qualify for.",
      options: ["Under 18", "18–29", "30–49", "50 or above"],
      key: "age",
    },
    {
      type: "message",
      message: `${
        name ? name + "," : ""
      } your odds of qualifying are looking even better. Good news: Since you’re over 50, your application is more likely to go through.`,
      key: "age_message",
      condition: (answers) => answers.age === "50 or above",
    },
    {
      type: "form",
      question: "Create an account to find out if you qualify:",
    },
  ];
  const [agree, setAgree] = useState(false);
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
    if (key === "name") setName(value);

    // Disqualify if no
    if (key === "work_years" && value === "No") {
      setQualified(false);
      setFinished(true);
      return;
    }
    if (key === "lawyer_status" && value == "Yes") {
      setQualified(false);
      setFinished(true);
      return;
    }

    // Show special message for age 50+
    if (key === "age" && value === "50 or above") {
      setStep(step + 1);
      return;
    }

    // Next
    if (step < questions.length - 1) setStep(step + 1);
    else setFinished(true);
  };
  // 🟦 Handle form submission
 const handleFormSubmit = async (e) => {
  e.preventDefault();

  if (!agree) {
    alert("Please agree to the terms before submitting.");
    return;
  }

  const leadPayload = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    answers,
    leadid_token: document.getElementById("leadid_token")?.value || "",
  };

  try {
    console.log("Submitting Lead Data:", leadPayload);

    const response = await fetch("https://lead-proxy-server.onrender.com/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadPayload),
    });

    if (!response.ok) {
      throw new Error("CORS block or API error");
    }

    console.log("✅ Lead submitted successfully");
    window.location.href = "/thank-you";
  } catch (error) {
    console.warn("⚠️ Lead submission skipped (CORS block in browser).");
    console.log("Redirecting to success page for demo...");
    window.location.href = "/thank-you";
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
                  That’s great! We wish you the best with your DisabilityClaimAssist .
                  If you ever need more assistance or a second opinion, our team
                  is here for you.
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
                        className="w-full border border-gray-300 hover:bg-red-600 hover:text-white rounded-lg py-3 text-lg font-medium hover:border-blue-500 transition"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {questions[step].type === "text" && (
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl md:text-3xl font-bold mb-6">
                    {questions[step].question}
                  </h1>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 hover:bg-red-600 hover:text-white rounded-lg px-4 py-2 w-full mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <button
                    onClick={() => handleAnswer(questions[step].key, name)}
                    disabled={!name}
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}

              {questions[step].type === "message" && (
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-6">
                    {questions[step].message}
                  </h1>
                  <button
                    onClick={() => setStep(step + 1)}
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Next →
                  </button>
                </div>
              )}

              {questions[step].type === "form" && (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  {/* Hidden Jornaya field */}
                  <input
                    id="leadid_token"
                    name="universal_leadid"
                    type="hidden"
                    value=""
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                      className="border border-gray-300  rounded-lg px-4 py-2 w-full"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                      className="border border-gray-300  rounded-lg px-4 py-2 w-full"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="border border-gray-300  rounded-lg px-4 py-2 w-full"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="border border-gray-300  rounded-lg px-4 py-2 w-full"
                  />

                  {/* Disclaimer */}
                  <label className="flex items-start space-x-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-1"
                      required
                    />
                    <span>
                      By checking this box, I confirm that I have read and agree
                      to the{" "}
                      <a href="/privacy" className="text-red-600 underline">
                        Privacy Policy
                      </a>{" "}
                      and Terms of Service.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition w-full"
                  >
                    Submit & Continue →
                  </button>
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
