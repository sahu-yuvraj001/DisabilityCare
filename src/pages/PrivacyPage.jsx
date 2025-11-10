"use client";
import { useNavigate } from "react-router-dom";
import React from "react";


const PrivacyPage = () => {
   const navigate = useNavigate();

  const buttons = [
    {
      label: "Consent to Electronic Communications (E-Consent)",
      id: "section-1",
    },
    { label: "About Us and Our Purpose", id: "section-2" },
    { label: "Consent to SMS, Text & Push Notifications.", id: "section-3" },
    { label: "Compliance with Do-Not-Call Registry", id: "section-4" },
    { label: "General Collection and Use of Information", id: "section-5" },
    {
      label: "How Consumer Information is Shared",
      id: "section-6",
    },
    { label: "California's 'Shine the Light'", id: "section-7" },
    { label: "Opt-Out Rights", id: "section-8" },
    { label: "Information Retention and Right to Delete", id: "section-9" },
    { label: "Right to Not Be Discriminated Against", id: "section-10" },
    { label: "Underage Users and Children's Privacy", id: "section-11" },
    { label: "Security", id: "section-12" },
    { label: "Surveys", id: "section-13" },
    { label: "Cookies", id: "section-14" },
    { label: "Links", id: "section-15" },
    { label: "Update or Correct Your Information", id: "section-16" },
    { label: "Notifications of Changes", id: "section-17" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll smoothly to the element
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[80%] mx-auto flex my-10 ">
      <div className=" w-[25%] hidden mx-6 px-4 lg:flex flex-col h-auto bg-[#F8F8F8]">
        {buttons.map((x, i) => (
          <button
            className="border-t text-lg py-5 font-bold text-start"
            key={i}
            onClick={() => scrollToSection(x.id)}
          >
            {" "}
            {x.label}
          </button>
        ))}

        {/* <button
          onClick={() => scrollToSection("section-19")}
          className="flex items-center text-sm font-bold mt-auto sticky "
        >
          Scroll Up <RiArrowUpSLine className="text-2xl" />
        </button> */}
      </div>
      <div className="lg:w-[70%] md:w-[90%] rounded-md mr-auto flex flex-col justify-center items-start bg-[#fff] text-[#000000] shadow-xl text-[18px] py-8 px-4 md:px-16">
        <h1
          id="section-19"
          className={` text-[32px] lg:text-[64px] md:text-[46px] font-bold mb-4  `}
        >
          Privacy Policy{" "}
        </h1>
        <div className="flex flex-col gap-2">
          <p>Last Updated: 10-05-2024</p>
          <p>A1 Media LLC (1735 Buford Hwy, Ste 215-225, Cumming GA 30041)</p>
          <p>
            The purpose of this Privacy Policy is to describe the type of
            information collected by this website and to explain how we collect,
            use and distribute any personal information you may provide to us.
            It also describes how you may access and update any information you
            have provided, as well as how you can choose to have your personal
            information deleted from our company records. In addition to both
            state and federal regulations, we are also guided by certain
            industry standards, which are designed to enhance trust among
            consumers and online merchants or service providers. By adhering to
            all of the above mentioned requirements, we can ensure that we treat
            consumers with respect and use fair, non-abusive information
            collection practices.
          </p>
          <p>
            It is our goal to ensure that you feel safe and secure when you use
            our website. Any time you visit or use this site, you are agreeing
            to this Privacy Policy. If you do not agree with the Policy, or how
            we use your information, we ask that you do not use this website or
            submit any personal information. We may change this policy from time
            to time by updating this page without any notice.
          </p>
          <p>
            Any questions regarding our Privacy Policy or information collection
            practices should be sent to us via email at{" "}
            <span
              onClick={() => navigate("/contact")}
              className="text-blue-700 underline cursor-pointer"
            >
              contact@medicare2go.online
            </span>{" "}
          </p>
        </div>

        <div className="flex flex-col gap-2" id="section-1">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-1">
            Consent to Electronic Communications (E-Consent){" "}
          </h6>
          <p className="" id="paragraph-1">
            <span className="italic font-semibold">
              Please read this information carefully and print a copy and/or
              retain this information for future reference.
            </span>{" "}
            By utilizing this website and clicking the “submit” button, you are
            submitting a request to be connected with one of our health or
            medicare partners. In order to attempt to connect you with a partner
            that may offer you a health insurance or Medicare/Medigap product or
            service, the providers need your consent to use and accept
            electronic signatures, records, and disclosures
            (&apos;E-Consent&apos;). This policy notifies you of your rights
            when receiving electronic disclosures, notices, information and
            other forms of communication. By submitting your information on our
            website, you acknowledge that you have received and reviewed this
            E-Consent Policy, and that you consent to conduct transactions using
            electronic signatures, electronic disclosures, electronic records,
            and electronic contract documents (&apos;Disclosures&apos;).
          </p>
          <p>
            <span className="italic font-semibold">Scope of Consent.</span> This
            E-Consent Policy applies to all interactions online concerning you
            and the provider you may be connected with, and includes those
            interactions engaged in on any mobile device, including phones,
            smart-phones, tablets, and any other electronic device that allows
            the consumer to connect to the Internet. By exercising this
            E-Consent, the provider or broker may process your information and
            interact during all online interactions with you electronically. The
            provider may also send you notices electronically related to its
            interactions and transactions. Disclosures may be provided online at
            the partners website, and may be provided by e-mail. See above for
            guidance on how to request paper copies.
          </p>
          <p>
            <span className="italic font-semibold">
              Consenting to Do Business Electronically.
            </span>{" "}
            Before you decide to request health coverage or medicare
            electronically with a provider, you should consider whether 1. You
            wish to conduct business electronically, and 2. You have the
            required hardware and software capabilities described below.
          </p>
          <p>
            <span className="italic font-semibold">
              Hardware and Software Requirements.
            </span>{" "}
            To both access and retain the Disclosures electronically, at a
            minimum, you will need to use the following computer software and
            hardware: A PC or MAC compatible computer or other device capable of
            accessing the Internet, access to an electronic mail (e-mail)
            account, and an Internet Browser software program that supports at
            least 256-BIT encryption, including but not limited to, Microsoft®
            Internet Explorer, Google Chrome® or Mozilla Firefox®. To read some
            documents, you may need a PDF file reader like Adobe® Acrobat
            Reader® or Foxit®. You will need a printer or a long-term storage
            device, such as your computer&apos;s disk drive, to retain a copy of
            the Disclosures for future reference. You may send any questions
            regarding the specific hardware and software requirements directly
            to your provider.
          </p>
          <p>
            <span className="italic font-semibold">Withdrawing Consent.</span>{" "}
            If you are connected with one or more third-party providers, you are
            free to withdraw your E-Consent with those providers at any time,
            and at no charge. However, if you withdraw this E-Consent before
            being connected with a provider, you may be prevented from obtaining
            an offer as this consent is required, for this one time transaction,
            to facilitate the connection and to conduct business. Contact your
            provider directly if you wish to withdraw this E-Consent. If you
            decide to withdraw this E-Consent, the legal effectiveness,
            validity, and enforceability of prior electronic disclosures will
            not be affected.
          </p>
          <p>
            <span className="italic font-semibold">
              Change to Your Contact Information.
            </span>{" "}
            You should keep your provider informed of any change in either your
            electronic address or physical mailing address. Your provider will
            have specific instructions on how to update your contact
            information, if necessary. Please note that medicare2go.online
            cannot update your information for you.
          </p>
          <p>
            <span className="italic font-semibold">
              Your Ability to Access Disclosures.
            </span>{" "}
            By clicking and submitting your information, you assent to our terms
            and conditions. You acknowledge that you can access the disclosures
            in the designated formats described above.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-2">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-2">
            About Us and Our Purpose{" "}
          </h6>
          <p id="paragraph-2">
            We operate, own and maintain medicare2go.online and may be referred
            to as ‘company&apos;, ‘us&apos;, ‘our&apos;, ‘we&apos;, ‘site&apos;
            or ‘website&apos; throughout this document and website. Through the
            use of this site, we also operate a database of prospective
            customers, which is known as the ‘service&apos;. To promote this
            site and add to our database, we utilize any number of third
            parties, affiliates and media advertisements.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-3">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-3">
            Consent to SMS, Text & Push Notifications.
          </h6>
          <p id="paragraph-3">
            When you submit your information to us, your name and contact
            information, such as email address and phone number, are
            automatically added to our contact list. By providing such
            information, you are agreeing to receive communications from us via
            telephone, email or text message unless you choose to opt out of one
            or all of these communication methods. You will only receive these
            contacts from us for as long as you agree to them. Please review our{" "}
            <span
              onClick={() => navigate("/sms")}
              className="text-blue-700 underline cursor-pointer"
            >
              SMS Terms and Conditions{" "}
            </span>{" "}
            for more details.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-4">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-4">
            Compliance with Do-Not-Call Registry{" "}
          </h6>
          <p id="paragraph-4">
            It is every consumer&apos;s right to add his or her telephone number
            to the National Do Not Call Registry, which, in general, applies to
            any plan, program, or campaign to sell goods or services through
            interstate phone calls. However, a company may call a consumer with
            whom it has an established business relationship for up to eighteen
            (18) months after the consumer&apos;s last purchase, delivery or
            payment, and for up to three (3) months after the consumer submits
            an application or an inquiry to the company, even if the
            consumer&apos;s number has been added to the National Do Not Call
            Registry.
          </p>
          <p>
            Medicare2Go does not make outbound phone calls to consumers, and
            therefore does not maintain an internal do not call registry of its
            own. If you no longer wish to receive phone calls from a provider
            you got connected with, you will have to contact them directly and
            request that your telephone number be placed on their specific do
            not call list.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-5">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-5">
            General Collection and Use of Information{" "}
          </h6>
          <p>Types of Information Collected </p>
          <p id="paragraph-5">
            PERSONAL INFORMATION: medicare2go.online collects information from
            both existing and prospective customers in an attempt to connect
            them with Medicare partners for the products and services they
            request. You may be required to provide certain personal information
            to us when you elect to use certain products or services available
            on the Site. We do not collect any personal information about you
            unless you voluntarily provide it to us.
          </p>
          <p>
            The personal information collected includes but is not limited to
            name, current home address, email address, telephone numbers, date
            of birth.
          </p>
          <p>
            NON-PERSONAL INFORMATION: We may also collect certain information
            about your computer for analytics purposes. Some of this information
            includes your IP address, the type of browser you are using, the
            times you access our website, and the website that referred you.
            This information is used to help improve the quality of the services
            that we provide to you, including the way these services are
            delivered, and to generate statistics about the way our site is
            used.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-6">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-6">
            How Consumer Information is Shared{" "}
          </h6>
          <p id="paragraph-6">
            We do not rent, sell, or share your information with any other third
            parties unless it is with your explicit consent.
          </p>
          <p>We may also disclose personal information about you when:</p>
          <ul className="list-disc ml-6">
            <li className="">
              We are required to do so by law, such as when we are subpoenaed
            </li>
            <li className="">
              We have reason to believe that doing so is necessary for the
              protection of our rights, to protect your safety or the safety of
              others, to respond to a request from the government or to
              investigate alleged or factual fraud.
            </li>
            <li className="list-item">
              We are involved in a merger, sale or acquisition of our company or
              assets.
            </li>{" "}
            <li className="list-item">
              You have provided your consent to give your information to other
              third parties.
            </li>{" "}
          </ul>
        </div>
        <div className="flex flex-col gap-2" id="section-7">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-7">
            California&apos;s &apos;Shine the Light&apos;{" "}
          </h6>
          <p id="paragraph-7">
            Under California&apos;s &apos;Shine the Light&apos; law, CA Civil
            Code § 1798.83, California residents who provide personal
            information in obtaining products or services for personal, family
            or household use are entitled to request and obtain from us once a
            calendar year information about the customer information we shared,
            if any, with any third parties. If applicable, this information
            would include the categories of customer information and the names
            and addresses of those businesses with which we shared customer
            information for the immediately prior calendar year (e.g. requests
            made in 2018 will receive information regarding 2017 sharing
            activities).
          </p>
          <p>
            Even though we do not sell or share your information with any third
            parties except for the licensed medicare partners in our network,
            you can still submit a request to obtain this information. Please
            send an email message to{" "}
            <span
              onClick={() => navigate("/contact")}
              className="text-blue-700 underline cursor-pointer"
            >
              contact@medicare2go.online
            </span>{" "}
            with “Request for California Privacy Information” on the subject
            line and in the body of your message. We will provide the requested
            information to you at your e-mail address in response. Please be
            aware that not all information sharing is covered by the “Shine the
            Light” requirements and only information on covered sharing will be
            included in our response.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-8">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-8">
            Opt-Out Rights{" "}
          </h6>
          <p id="paragraph-8">
            You may choose not to receive any communications from us by not
            submitting your personal information via the request form on our
            website. During registration and/or when you submit personally
            identifiable information to us at this website, you acknowledge that
            you have opted-in to request that we share your personal information
            with the participating medicare partners of our network in order to
            fulfill your request. If at any time you wish to opt out from
            receiving communications from medicare2go.online, please email{" "}
            <span
              onClick={() => navigate("/contact")}
              className="text-blue-700 underline cursor-pointer"
            >
              contact@medicare2go.online
            </span>{" "}
            and request that communications cease, and to be added to the the do
            not contact list. Unsubscribe function instructions can also be
            found on any email or sms communications from medicare2go.online, or
            you can use the unsubscribe feature here:{" "}
            <span
              onClick={() => navigate("/unsubscribe")}
              className="text-blue-700 underline cursor-pointer"
            >
              {" "}
              Unsubscribe
            </span>
            .
          </p>
          <p>
            If you are eventually contacted by any of medicare2go.online&apos;s
            partners, you should notify them directly of your choices regarding
            their use and sharing of your information and if you so choose, you
            should communicate your decision to opt-out of receiving additional
            offers from them individually. Each partner may have its own
            specific opt-out procedures, and you should follow their
            instructions carefully.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-9">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-9">
            Information Retention and Right to Delete{" "}
          </h6>
          <p id="paragraph-9">
            Under the California Consumer Protection Act of 2018, a consumer has
            the right to request, via verifiable request method, that
            medicare2go.online delete any personal information about the
            consumer that has been collected. Upon receipt of such request,
            Medicare2Go shall delete the information and shall direct its
            partners to delete the information from its records as well, except
            under limited circumstances where the consumer&apos;s information is
            required to: (1) compute the transaction for which the personal
            information was collected, provide a good or service requested by
            the consumer, or reasonably anticipated within the context of
            Medicare2Go&apos;s ongoing business relationship with the consumer,
            or otherwise perform a contract between Medicare2Go and the
            consumer; (2) detect security incidents; protect against malicious,
            deceptive, fraudulent, or illegal activity; or prosecute those
            responsible for that activity; (3) debug to identify and repair
            errors existing intended functionality; (4) exercise free speech,
            ensure the right of another consumer to exercise his/her right of
            free speech, or exercise another right provided for by law; (5)
            comply with the California Electronic Communications Privacy Act;
            (6) engage in public or peer-reviewed scientific, historical, or
            statistical research in the public interest; (7) to enable solely
            internal uses that are reasonably aligned with the expectations of
            the consumer based on the consumer&apos;s relationship with
            Medicare2Go; (8) comply with a legal obligation; (9) otherwise use
            the consumer&apos;s personal information, internally, in a lawful
            manner that is compatible with the context in which the consumer
            provided the information.
          </p>
          <p>
            Any information you provide to Medicare2Go will be retained until
            you make the decision to cancel your account with us. If you want to
            cancel your account or if you want to request that we no longer use
            your information to provide you with products and services, you can
            contact us at{" "}
            <span
              onClick={() => navigate("/contact")}
              className="text-blue-700 underline cursor-pointer"
            >
              contact@medicare2go.online
            </span>{" "}
            . Even after this request, your information may be retained for the
            appropriate amount of time to comply with various legal and
            statutory obligations.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-10">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-10">
            Right to Not Be Discriminated Against{" "}
          </h6>
          <p id="paragraph-10">
            Should you decide to exercise any of the above mentioned rights
            under the California Consumer Protection Act, medicare2go.online is
            prohibited from discriminating against that consumer for that
            exercise. However, important to note is that medicare2go.online also
            offers a different price, rate, level, or quality of goods or
            services to the consumer if that price or difference is directly
            related to the value provided to the consumer by the consumer&apos;s
            data.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-11">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-11">
            Underage Users and Children&apos;s Privacy{" "}
          </h6>
          <p id="paragraph-11">
            Protecting the privacy of children is especially important. For this
            reason, we do not knowingly collect or maintain personal information
            at our website from individuals under the age of 18 years old. In
            the event that information is inadvertently collected from children,
            it will not knowingly be used for any purpose whatsoever, either
            inside or outside of our website. Should we obtain actual knowledge
            that such information has been collected, that information will be
            immediately deleted from our database. The information and services
            provided by us, our parnters and advertisers are not intended for
            persons under 18 years old.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-12">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-12">
            Security{" "}
          </h6>
          <p id="paragraph-12">
            Since the safety of your personal information is incredibly
            important to us, we use industry recognized methods to protect the
            information you provide to us as it is being transmitted to
            medicare2go.online, and after we have received it. There is no
            method of data transmission or storage that is 100% fail-proof, so
            we cannot guarantee the absolute security of your information. For
            more questions about the security methods used on our website,
            please contact us at{" "}
            <span
              onClick={() => navigate("/contact")}
              className="text-blue-700 underline cursor-pointer"
            >
              contact@medicare2go.online
            </span>{" "}
            . If you do not agree with our methods of protecting your
            information, we ask that you abstain from submitting any information
            on our website.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-13">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-13">
            Surveys
          </h6>
          <p id="paragraph-13">
            From time-to-time, we may provide you the opportunity to participate
            in surveys on our site. If you participate, we may request certain
            personally identifiable information from you. Participation in these
            surveys or contests is completely voluntary and you, therefore, have
            a choice whether or not to disclose this information. The requested
            information typically includes contact information (such as name,
            telephone number, email and shipping address), and demographic
            information (such as zip code). We use this information to improve
            our websites, monitor website traffic or personalize the websites
            for future advertising and marketing campaigns.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-14">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-14">
            Cookies
          </h6>
          <p id="paragraph-14">
            A cookie is a bit of data that is placed on your computer by a
            website for tracking purposes. Essentially, the website can send
            information to your computer and your computer can send information
            back to the website via this cookie. This information is exchanged
            for the purposes of authentication, user session identification,
            user preferences, saving login information and some additional
            website optimization designed to improve the user experience. You
            have the right to reject cookies from our website, but if you choose
            to do so, you may not have access to the full range of products,
            services, and features we provide. Sometimes, cookies may be used to
            track and target your interests. In this case, your personal
            information may be tied to these cookies. However, all of the above
            rights regarding opt-out, unsubscribe, and the right to delete
            information still apply.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-15">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-15">
            Links{" "}
          </h6>
          <p id="paragraph-15">
            This site also provides links to external sites, and our Privacy
            Policy does not cover these websites. Should you choose to leave
            medicare2go.online via a link you find on our site, you should read
            and review the Privacy Policies associated with these websites
            thoroughly, as they may contain different terms.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-16">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-16">
            Update or Correct Your Information{" "}
          </h6>
          <p id="paragraph-16">
            If you would like to verify, correct, update or delete any of the
            information you have provided to Medicare2Go, please contact us at{" "}
            <span
              onClick={() => navigate("/contact")}
              className="text-blue-700 underline cursor-pointer"
            >
              contact@medicare2go.online
            </span>{" "}
            .
          </p>
        </div>
        <div className="flex flex-col gap-2" id="section-17">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-17">
            Notifications of Changes{" "}
          </h6>
          <p id="paragraph-17">
            From time to time, Medicare2Go may make changes to this Privacy
            Policy without further notice to its users. You should continue to
            review this Policy periodically to ensure that you are up-to-date
            and knowledgeable about any changes that are taking place.
          </p>
          <div className=" flex flex-col ">
            <p className=" font-semibold ">Mailing Address:</p>
            <p>A1 Media LLC</p>
            <p>1735 Buford Hwy, Ste 215-225</p>
            <p>Cumming, GA 30041</p>
            <div className="flex gap-1">
              <p className=" font-semibold ">Email:</p>
              <a
                onClick={() => navigate("/contact")}
                className="text-blue-700 underline cursor-pointer"
              >
                contact@medicare2go.online
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
