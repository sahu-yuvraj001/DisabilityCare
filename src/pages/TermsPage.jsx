"use client";
import { useNavigate } from "react-router-dom";
import React from "react";

const TermsPage = () => {
   const navigate = useNavigate();
  const buttons = [
    { label: "Products and Services", id: "section-1" },
    { label: "Information Acceptance Policy", id: "section-2" },
    { label: "Restrictions", id: "section-3" },
    { label: "Compliance With Laws", id: "section-4" },
    { label: "Intellectual Property", id: "section-5" },
    {
      label: "Limitation Of Liability And Disclaimer Of Warranties",
      id: "section-6",
    },
    { label: "Third Party Content", id: "section-7" },
    { label: "Privacy", id: "section-8" },
    { label: "Security", id: "section-9" },
    { label: "Site Use", id: "section-10" },
    { label: "Law and Venue", id: "section-11" },
    { label: "Modification", id: "section-13" },
    { label: "Indemnification", id: "section-14" },
    { label: "Dispute Resolution", id: "section-15" },
    { label: "Violation of The Terms Of Use", id: "section-16" },
    { label: "Miscellaneous", id: "section-17" },
    { label: "Contact Information", id: "section-18" },
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
      <div className=" w-[20%] hidden mx-6 px-4 lg:flex flex-col h-auto bg-[#F8F8F8]">
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
      <div className="lg:w-[75%] md:w-[90%] rounded-md mr-auto flex flex-col justify-center items-start bg-[#fff] text-[#000000] shadow-xl text-[16px] py-8 px-4 md:px-16">
        <h1
          id="section-19"
          className={` text-[32px] lg:text-[64px] md:text-[46px] font-bold mb-4  `}
        >
          Terms and Conditions
        </h1>
        <div className="flex flex-col gap-3">
          <p>Last Updated: 10-05-2024 </p>
          <p>
            Global Web Marketing LLC (3200 Kirkwood Highway #1060, Wilmington,
            DE 19808) (“we” or “our”) owns and operates the website located at{" "}
            <span
              onClick={() => navigate("/")}
              className="text-blue-700 underline cursor-pointer"
            >
              medicare2go.online
            </span>
            , (the “Site”). Medicare2Go provides and maintains this site for
            your information, conditioned on your acceptance, without
            modification, of the terms, conditions and notices contained in this
            Terms of Use. By accessing and using the site, you accept and agree,
            without limitation, to the following:
          </p>
        </div>

        <div className="flex flex-col gap-3" id="section-1">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-1">
            Products and Services
          </h6>
          <p id="paragraph-1">
            You understand and agree that Medicare2Go is not an insurance
            provider and is not the creditor for or issuer of, any of the
            products featured on the Site. Any products or services advertised
            at this site or made available to you by any of our partners after
            you leave the Medicare2Go site, are by and remain the sole
            responsibility of the respective product vendors and service
            providers.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-2">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-2">
            Information Acceptance Policy
          </h6>
          <p id="paragraph-2">
            Your receipt of an electronic or other form of order request
            confirmation does not signify any acceptance of your application,
            nor does it constitute confirmation of any offer to supply you with
            an insurance policy. Medicare2Go reserves the right at any time
            after receipt of your information via form to accept or decline your
            request for any reason. Medicare2Go is not responsible for requests
            that cannot be supplied or unsuccessful application requests arising
            from an applicant&apos;s ineligibility to qualify for the insurance
            policy opportunity.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-3">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-3">
            Restrictions
          </h6>
          <p id="paragraph-3">
            You must be 18 years or older to use the Site. You agree not to use
            this Site or any content contained in it for any illegal or
            inappropriate activities.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-4">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-4">
            Compliance With Laws
          </h6>
          <p id="paragraph-4">
            You agree to comply with all applicable laws, statutes, ordinances
            and regulations regarding your use of the Site and your purchase of
            products or services through the Site&apos;s third party affiliates.
            Medicare2Go may, in its sole discretion, report actual or perceived
            violations of law to law enforcement or other appropriate
            authorities. If Medicare2Go becomes aware, through a complaint or
            otherwise, of any potential or suspected violation of these Terms of
            Use or of its Privacy Policy (“Privacy Policy”), Medicare2Go the
            suspected violation and the appropriate enforcement action. During
            the investigation, Medicare2Go may suspend services to any customer
            being investigated and/or remove any material related to the
            aforementioned consumer from Medicare2Go&apos;s servers. You agree
            to cooperate fully with any such investigation. You acknowledge that
            violations of the Terms of Use or the Privacy Policy could be
            subject to criminal or civil penalties.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-5">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-5">
            Intellectual Property
          </h6>
          <p id="paragraph-5">
            The trademarks, titles, characters, trade names, graphics, designs
            and other properties, including all software, text and images
            appearing on this site are protected intellectual properties owned
            by Medicare2Go, its licensees, or other third parties who have
            authorized use of such properties on the Site.
          </p>
          <p>
            Medicare2Go grants you permission to view and make copies of
            documents, pages, images or other materials or content on this site
            for the purposes of submitting a request for an insurance policy
            from Medicare2Go or its affiliates for your non-commercial, personal
            use. Medicare2Go reserves all other rights in this web site and its
            contents. You may not distribute, display, transmit or disseminate
            any such documents, pages, images, materials or content without the
            prior written consent of Medicare2Go. Except as expressly provided
            on this site, nothing contained on this site shall be construed as
            conferring any right or license under any trademark, copyright or
            other intellectual property right.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-6">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-6">
            Limitation Of Liability And Disclaimer Of Warranties
          </h6>
          <p id="paragraph-6">
            Medicare2Go uses reasonable efforts to ensure that the information
            on this site is accurate, but cannot guarantee such accuracy.
            Medicare2Go makes no representations regarding the use or results of
            any content on the Site as to its accuracy, reliability or any other
            matter. NEITHER Medicare2Go NOR ANY OTHER PARTY INVOLVED IN
            CREATING, PRODUCING OR DELIVERING THIS SITE SHALL BE LIABLE FOR ANY
            DIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, INDIRECT OR PUNITIVE
            DAMAGES ARISING OUT OF YOUR ACCESS TO, OR USE OF, THIS SITE.
            EVERYTHING ON THIS SITE IS PROVIDED “AS IS” AND WITHOUT WARRANTY OF
            ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO,
            ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE OR NON-INFRINGEMENT. These exclusions and limitations are
            applied to the fullest extent permitted by law in each jurisdiction.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-7">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-7">
            Third Party Content
          </h6>
          <p id="paragraph-7">
            The Site may contain links to sites maintained by third parties.
            Medicare2Go is not responsible for the content or privacy policies
            of those sites, and the existence of such links should not be
            considered an endorsement or recommendation of those sites or of any
            product or service offered on those sites or of any party that is
            associated with those sites.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-8">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-8">
            Privacy
          </h6>
          <p id="paragraph-8">
            Medicare2Go&apos;s Privacy Policy, which is incorporated herein by
            reference, is applicable to any data supplied through the Site in
            accordance with the Privacy Policy available at{" "}
            <span
              onClick={() => navigate("/privacy")}
              className="text-blue-700 underline cursor-pointer"
            >
              medicare2go.online/privacy
            </span>
            . The Privacy Policy sets out your rights and Medicare2Go&apos;s
            responsibilities with regard to your personal information.
            Medicare2Go will not use your information in any way inconsistent
            with the purposes and limitations provided in the Privacy Policy.
            You agree that Medicare2Go, in its sole discretion, may modify the
            Privacy Policy, and you further agree that, by using the Site after
            such modifications become effective, you have agreed to these
            modifications. You acknowledge that if you do not agree to any such
            modification, you will terminate use of the Site.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-9">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-9">
            Security
          </h6>
          <p id="paragraph-9">
            Medicare2Go utilizes secure technology to protect your personal
            information. Although Medicare2Go has taken reasonable measures to
            provide for the security of certain information that you submit to
            the Site, Medicare2Go cannot guarantee that this information will
            not be intercepted or decrypted by others. Medicare2Go accepts no
            responsibility for such interception or decryption.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-10">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-10">
            Site Use
          </h6>
          <p id="paragraph-10">
            Medicare2Go is not your agent, or is it the agent of the issuer of
            any insurance policies or any supplier with respect to your decision
            to obtain an insurance policy or other insurance offerings.
            Medicare2Go may receive compensation for third parties for goods,
            facilities or services that Medicare2Go provides to third parties
            under separate contract. Such goods, facilities or services may or
            may not relate in any way to your use of the Site. You agree to any
            such compensation arrangement whether or not related in any way to
            your use of the Site.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-11">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-11">
            Law and Venue
          </h6>
          <p id="paragraph-11">
            You agree that any legal action brought against us shall be governed
            by the laws of the State of Delaware, without regard to conflict of
            law principles. You agree that the sole jurisdiction and venue for
            any litigation arising from your use of or orders made on the Site
            shall be an appropriate federal or state court located in Delaware.
            Medicare2Go makes no representations that the content in the Site is
            appropriate for access outside the United States. Those who choose
            to access the Site from outside the United States do so on their own
            initiative and are responsible for compliance with local laws. If
            any provision within this Terms of Use is held to be invalid or
            unenforceable, such provision shall be struck and all remaining
            provisions shall be enforced.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-13">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-13">
            Modification
          </h6>
          <p id="paragraph-13">
            Medicare2Go reserves the right to modify these Terms of Use from
            time to time. Your use of the Site after such a modification will
            constitute your acceptance of, and your agreement to, any new or
            amended terms and conditions.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-14">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-14">
            Indemnification
          </h6>
          <p id="paragraph-14">
            By using the Site, you agree to indemnify and hold Medicare2Go, its
            subsidiaries, affiliates, officers, agents and other partners and
            employees, harmless from any loss, liability, claim or demand,
            including reasonable attorneys&apos; fees, made by any third party
            due to or arising out of your use or attempted use of the Site,
            including providing a link to another site or uploading any content
            to the Site.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-15">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-15">
            Dispute Resolution
          </h6>
          <p id="paragraph-15">
            If you have any dispute concerning any aspect of these Terms of
            Website Use, the Website, or any of our services, you agree to
            submit your dispute for resolution by arbitration before the
            American Arbitration Association (&apos;AAA&apos;) in the county
            where you live by filing a Demand for Arbitration. The arbitrator
            will have exclusive authority to resolve any dispute including any
            claim that all or any part of these Terms of Website Use are
            unenforceable. Opt-Out of Arbitration/Class Action Waiver. The Terms
            & Conditions do not constitute a waiver of any of your rights and
            remedies to pursue a claim individually and not as a class action in
            binding arbitration as provided above. This provision preventing you
            from bringing, joining or participating in class action lawsuits is
            an independent agreement. You may opt-out of these Dispute
            Resolution Provisions by providing written notice of your decision
            within thirty (30) days of the date that you first register on the
            Medicare2Go Website. YOU ACKNOWLEDGE AND AGREE THAT, VIA YOUR
            ACCEPTANCE OF THESE DISPUTE RESOLUTION PROVISIONS, YOU WAIVE ANY
            RIGHT TO A JURY TRIAL, AS WELL AS YOUR RIGHT TO BRING, JOIN OR
            PARTICIPATE AS A PLAINTIFF OR A CLASS MEMBER IN A CLASS ACTION SUIT
            OR MULTI-PARTY ARBITRATION BROUGHT AGAINST US, ANY PERSON RELATED TO
            US OR A SERVICE PROVIDER USED BY US TO PROVIDE THE SERVICE. This
            arbitration agreement includes claims related to our clients,
            vendors, and Marketing Partners, which are third party beneficiaries
            of this arbitration agreement.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-16">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-16">
            Violation of The Terms Of Use
          </h6>
          <p id="paragraph-16">
            By using the Site, you understand and agree that Medicare2Go, at its
            sole discretion and without prior notice, may terminate your access
            to the Site and to any services offered on the Site, and may remove
            any content you have provided if Medicare2Go believes that such
            content violates or is inconsistent with these Terms of Use or the
            Privacy Policy or their intent, that your conduct is disruptive, or
            you have violated the law or the rights of Medicare2Go or another
            user.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-17">
          <h6 className="text-[28px] md:text-[32px] font-bold" id="heading-17">
            Miscellaneous
          </h6>
          <p id="paragraph-17">
            All rights not expressly granted are reserved to Medicare2Go. The
            headings used in these Terms of Use are intended for convenience
            only, and shall not affect the construction and interpretation
            hereof or thereof. A party&apos;s failure to insist upon or enforce
            strict performance of any provision of the Terms of Use shall not be
            construed as a waiver of such or any future provision or right. If
            any provision of these Terms of Use is held to be invalid or
            unenforceable, such determination shall not affect such provision in
            any other respect or any other provision of these Terms of Use,
            which shall remain in full force and effect. These Terms of Use and
            the Privacy Policy constitute the entire agreement and understanding
            between the parties with respect to the subject matter contained
            herein and therein and supersedes and replaces any and all prior
            written or oral agreements related to the subject matter hereof.
          </p>
        </div>
        <div className="flex flex-col gap-3" id="section-18">
          <h6
            className="text-[28px] md:text-[32px] font-bold"
            id="ContactInformation"
          >
            Contact Information
          </h6>
          <p id="paragraph-18">
            Medicare2Go is always willing to answer your questions or concerns
            about this site. If you have questions relating to the terms of your
            insurance policy, please contact your insurance carrier directly.
          </p>
          <div className=" flex flex-col ">
            <p className=" font-semibold ">Mailing Address:</p>
            <p>IClick Interactive LLC</p>
            <p>1735 Buford Hwy, Ste 215-225</p>
            <p>Cumming, GA 30041</p>
            <div className="flex gap-1">
              <p className=" font-semibold ">Email:</p>
              <span
                onClick={() => navigate("/contact")}
                className="text-blue-700 underline cursor-pointer"
              >
                contact@medicare2go.online
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
