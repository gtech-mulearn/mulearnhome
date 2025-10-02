// src/app/termsandconditions/page.tsx

import React from 'react';
const LAST_UPDATED_DATE = "October 2, 2025"; 

const TermsAndConditionsPage = () => {
  return (
    // Main container styling: full width, readable text color, generous padding, 
    // and max width to prevent excessively long lines on large screens.
    <main className="min-h-screen bg-white text-gray-800 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Heading: Matches tcheader (32px bold/extrabold) and uses µLearn primary color. */}
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#000000] mb-8 text-center">
        TERMS OF SERVICES
        </h1>

        {/* Introduction Paragraph: Uses a slightly larger, bold font size as in the original */}
        <p className="text-lg font-semibold leading-relaxed text-gray-700 mb-8">
          These Terms of Services (“Terms” or “Agreement”) shall apply to use of
          μLearn platform (“μLearn” or “We” or “us). By becoming a registered
          user of μLearn platform and by clicking the "I Accept" button on this
          registration page, and by using the relevant Training, you acknowledge
          that you have read and understood this Terms of Services and you agree
          to be bound by all of the terms and conditions of this Agreement.
        </p>

        {/* The rest of the content is structured using semantic <section> and ordered/unordered lists */}
        
        {/* Ordered List (Top Level) - Use <section> for clarity */}
        <ol className="space-y-8 text-gray-700">

          {/* 1. Definitions */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                1. Definitions:
              </h2>
              {/* Lower Roman Sub-list: list-inside and pl-5 for proper indentation */}
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  <strong className="font-semibold">Confidential Information</strong> means information
                  provided by one party to the other including in written,
                  graphic, recorded, machine readable or other form concerning the
                  business, clients, suppliers, finances and other areas of the
                  disclosing party’s business or products, but does not include
                  information in the public domain other than through the default
                  of the party disclosing the information, information required to
                  be disclosed by any court or regulatory authority, or any
                  information already in the possession or control of the
                  disclosing party.
                </li>
                <li>
                  <strong className="font-semibold">Intellectual Property Rights</strong> means and includes
                  patents, trademarks, service marks, trade names, designs,
                  copyrights, rights of privacy and publicity and other forms of
                  intellectual or industrial property, know how, trade secrets,
                  any other protected rights or assets and any licenses and
                  permissions in connection therewith, in each and every part of
                  the world and whether or not registered or registrable and for
                  the full period thereof, and all extensions and renewals
                  thereof, and all applications for registration in connection
                  with the foregoing.
                </li>
                <li>
                  <strong className="font-semibold">Representative</strong> means any director, officer,
                  employee, agent or professional advisor of μLearn.
                </li>
                <li>
                  <strong className="font-semibold">Services</strong> means the services more particularly
                  described in Clause 2 of these Terms.
                </li>
                <li>
                  <strong className="font-semibold">Training or Training Material(s)</strong> means the
                  orientation programs, webinars, training or training materials
                  provided by μLearn from time to time in the course of the
                  delivery of our Services.
                </li>
                <li>
                  <strong className="font-semibold">Website</strong> means https://mulearn.org/ owned and
                  maintained by μLearn.
                </li>
                <li>
                  <strong className="font-semibold">You or you or your or yourself</strong> refers to the
                  individual/user who uses the Services.
                </li>
              </ol>
            </li>
          </section>
            
          {/* 2. Services */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                2. Services:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  A description of our Services together with the Playbook are
                  available in our Website. Pursuant to these Terms, we will
                  provide you several Training Materials in accordance with the
                  corresponding description, which is set out on the Website
                  and/or in any relevant Training Material. We do not make any
                  commitment to you that you will obtain a particular result,
                  professional qualification or employment opportunity from your
                  use and completion of any of the Services. We expect you to
                  confirm that the Services will meet your needs before using the
                  same.
                </li>
                <li>
                  The Services and the Training Materials are provided solely for
                  your personal and non-commercial use ("Restricted Purpose"). You
                  may not use, download, save or print the Training Materials for
                  commercial use without our written consent. We reserve the right
                  to vary or withdraw any of the Services described on the Website
                  without any notice.
                </li>
              </ol>
            </li>
          </section>

          {/* 3. Password Use and Security */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                3. Password Use and Security:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  By registering in the μLearn platform, you acknowledge that the
                  account registered by you in μLearn platform is for your
                  exclusive use only. Use or sharing of your User Name and
                  Password by another user is not permitted and is cause for
                  immediate termination of this Agreement without notice to you.
                </li>
                <li>
                  You are solely responsible for maintaining the confidentiality
                  of Your User Name and Password and for all activities that occur
                  under your User Name and Password. You agree to immediately
                  notify our Customer Service Department if you become aware of or
                  have reason to believe that there is any unauthorized use of
                  your account or any other breach of security. You also agree to
                  take all reasonable steps to stop such unauthorized use and to
                  cooperate with μLearn in any investigation of such unauthorized
                  uses or of infringements of μLearn’s Intellectual Property
                  Rights in the Training. μLearn shall have the sole right to
                  bring any action on account of such infringements or
                  unauthorized uses. μLearn is in no way liable for any claims
                  related to the use or misuse of your User Name and Password due
                  to the activities of any third party outside of our control or
                  due to your failure to maintain your confidentiality and
                  security.
                </li>
              </ol>
            </li>
          </section>

          {/* 4. License Grant and Proprietary Rights */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                4. License Grant and Proprietary Rights:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  μLearn hereby grants you a personal, limited, non-transferable,
                  non-exclusive and revocable license (without the right to
                  assign, transfer or sublicense except as may be specifically
                  permitted in these Terms) to use the μLearn platform and the
                  software in respect of the Services for the sole purpose of
                  completing the Services.
                </li>
                <li>
                  Except as expressly provided in these Terms, no license, express
                  or implied, is granted or intended to be granted to you and we
                  reserve all rights not expressly hereby granted to you.
                </li>
                <li>
                  All Intellectual Property Rights in the Training Material(s)
                  including the speeches made by our authorised Representatives
                  are, and remain, the Intellectual Property of μLearn or its
                  licensors, whether adapted, written for or customized for you or
                  not.
                </li>
                <li>
                  Except as expressed granted in these Terms, you are not
                  authorized to:
                  {/* Bullet Sub-list */}
                  <ul className="list-disc list-inside pl-5 mt-2 space-y-2">
                    <li>
                      copy, modify, reproduce, re-publish, sub-licence, sell,
                      upload, broadcast, post, transmit, distribute, disseminate
                      or prepare derivative works any of the Training Material(s)
                      or its contents without our prior written permission;
                    </li>
                    <li>
                      record on video or audio tape, relay by videophone or other
                      means the Training Material(s) is given;
                    </li>
                    <li>
                      remove any copyright or other notice of μLearn on the
                      Training Material(s);
                    </li>
                    <li>
                      adapt, merge, translate, disassemble, decompile, reverse
                      engineer (save to the extent permitted by law) any software
                      forming part of the Training Material(s).
                    </li>
                  </ul>
                </li>
                <li>
                  μLearn’s Training is solely for your personal, non-commercial
                  use; you may not use the Training in any way in exchange for
                  monetary consideration. Individuals other than yourself may not
                  access or view this electronic file or use supporting materials,
                  whether electronically or in print. You are permitted online
                  access to the Training Material(s) and may download, save, or
                  print one hard copy of discreet sections of the text, search
                  results, or other information from the Training solely for your
                  personal, non-commercial use provided you includes all copyright
                  and other proprietary rights notices that appear on the original
                  and that you include a customary bibliographic citation,
                  including author attribution, date, article title, the μLearn
                  e-learning program, and the URL <a href="https://mulearn.org/" className="text-[#F56600] hover:underline transition duration-150">https://mulearn.org/</a>. You may
                  not disseminate any portion of the Training through electronic
                  means, including emails lists or bulletin boards, without the
                  prior consent of μLearn.
                </li>
                <li>
                  You may only use this online access in a way that conforms to
                  all Applicable Laws and regulations. Except as expressly granted
                  by this Agreement, you acquire no right, title or license in the
                  Training or its contents or other data or materials incorporated
                  in the Training.
                </li>
                <li>
                  Any breach of this Clause 4 or abuse of the policies of the
                  Training will result in the immediate and permanent cessation of
                  access to all μLearn servers and Services and of your license to
                  use the Training and will be pursued to the fullest extent
                  permitted under all Applicable Laws, treaties, and conventions.
                </li>
              </ol>
            </li>
          </section>

          {/* 5. Code of Conduct */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                5. Code of Conduct:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  You should be kind, respectful, inclusive, and supportive in all
                  your communications associated with μLearn.
                </li>
                <li>
                  No spamming, trolling, or advertising is permissible in μLearn
                  platform. This is applicable both in chats and Direct Messages
                  (DMs) of attendees.
                </li>
                <li>
                  No personal attacks, harassment, or doxxing is permissible in
                  μLearn platform. You are to be well mannered to everyone you
                  interact within μLearn platform.
                </li>
                <li>
                  You do not post any malicious or obscene images, videos,
                  messages, or inappropriate content of any kind.
                </li>
                <li>
                  You should use the channels provided properly as directed by
                  μLearn and/or its representatives.
                </li>
                <li>
                  You should not use our communication tools to send spam or
                  otherwise send content that would violate our Terms. We may
                  check for spam, viruses, phishing attacks and other malicious
                  activity or illegal or prohibited content of the Website.
                  <p className="mt-3">
                    Failing to adhere to the above rules as in this Clause 5 of this
                    Terms, you will be **suspended from the server** and will be
                    revoked from accessing other discord channels. The above listed
                    rules in this Clause 5 of this Terms are not exhaustive, and our
                    moderation team will step in if they feel that you are not
                    following proper protocols. You are expected to listen to and
                    act upon the guidelines and directions of our moderation team.
                  </p>
                </li>
              </ol>
            </li>
          </section>

          {/* 6. Liability */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                6. Liability:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  Except as expressly set forth in these Terms, neither Party
                  shall be liable for any indirect, consequential, exemplary,
                  special, incidental, or punitive damages incurred or suffered by
                  the other Party arising out of or in connection with these
                  Terms. Although μLearn aims to provide the Services to the
                  highest standards of the industry, neither it, nor its
                  representatives, trainers accept any liability for (i) any
                  inaccuracy or misleading information provided in the programmes
                  or Training Material(s) and any reliance by you on any such
                  information, (ii) any loss or corruption of data, or (iii) any
                  loss of profit, revenue or goodwill arising out of or in
                  connection with these Terms.
                </li>
                <li>
                  You shall keep μLearn saved and harmless from and against any
                  and all third party claims, demands, actions, suits or cause of
                  actions, including any claims related to infringement of any
                  third party intellectual property rights or breach of any third
                  party’s confidential information, arising from any act or
                  omission committed by you pursuant to these Terms.
                </li>
              </ol>
            </li>
          </section>

          {/* 7. Disclaimer */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                7. Disclaimer:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  Our content is created by experts and goes through strict
                  quality checks. The Website is available to users, including
                  you, on an “as is” basis, without any warranties as to accuracy,
                  fitness for use for a particular purpose, merchantability,
                  freedom from any errors, defects or non-infringement, and we do
                  not make any warranties that the Website shall always be running
                  and free of downtime, or that it shall be error-free, or any
                  representations regarding the availability and its performance
                  or any of the websites to which links may be provided in our
                  Website. We do not make any commitment that the Training
                  Material(s) will be compatible with or operate with your
                  software or hardware.
                </li>
                <li>
                  All the Training Material(s) are for e-learning purposes only.
                  μLearn will not accept any responsibility to any party for the
                  use of the Training Material(s) for any purpose other than
                  educational purposes, including but not limited to, the giving
                  of advice by you to any third party. We use cookies to store and
                  gather certain data to enable a smoother user experience. Our
                  Privacy Policy explains how such information may be collected
                  and used.
                </li>
              </ol>
            </li>
          </section>

          {/* 8. Confidentiality */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                8. Confidentiality:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  Each party agrees to preserve the confidential and secret nature
                  of the other’s Confidential Information and to use the
                  Confidential Information of the other party only for the purpose
                  for which it is provided. Except for the purposes of fulfilling
                  its obligations under these Terms or as permitted by these
                  Terms, the receiving party shall not possess, access, use or
                  disclose any of the other party’s Confidential Information
                  without its written consent, and shall take the same measures to
                  prevent disclosure of the other’s Confidential Information as it
                  takes to protect its own Confidential Information, and in no
                  event take less than commercially reasonable efforts.
                </li>
                <li>
                  Each party will disclose Confidential Information received from
                  the other only to such of its employees, agents, contractors and
                  advisors who need to know the same in furtherance of these
                  Terms, who have been notified of the confidential nature of the
                  said Information and are bound by signed written confidentiality
                  agreements containing terms substantially similar to those
                  contained in this Clause. Each party shall be responsible for
                  any breach of confidentiality by its employees, agents,
                  contractors and advisors.
                </li>
                <li>
                  On receipt of a request from the other party, the former party
                  shall destroy or return all Confidential Information received
                  from the other party and confirm the same in writing.
                </li>
                <li>
                  The obligations under this Clause will survive the termination
                  of these Terms.
                </li>
              </ol>
            </li>
          </section>

          {/* 9. Termination */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                9. Termination:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  We shall be entitled to terminate these Terms and cease to
                  provide you with any Services with immediate effect in the event
                  of any of the following is carried out by you:
                  {/* Bullet Sub-list */}
                  <ul className="list-disc list-inside pl-5 mt-2 space-y-2">
                    <li>
                      act in an aggressive, bullying, offensive, threatening or
                      harassing manner towards any employee of μLearn , any
                      Representatives or any participants who interacts with you;
                    </li>
                    <li>
                      cheat or plagiarize any work which you are required to
                      prepare or submit in connection with the Services or during
                      any assessments taken in connection with the Services;
                    </li>
                    <li>
                      steal or act in fraudulent or deceitful manner towards us or
                      our employees or representatives or any other students or
                      participants who may be on our premises or attending our
                      Trainings;
                    </li>
                    <li>
                      intentionally or recklessly damage our property or the
                      property of our employees or other students or participants
                      of μLearn; or
                    </li>
                    <li>are in breach of these Terms.</li>
                  </ul>
                </li>
                <li>
                  We reserve the right to monitor the IP addresses that are used
                  to access μLearn platform and, if you are is found to be in
                  contravention of the access rules (set out in Clauses 4.1, 4.4,
                  4.5 and 4.6), we may terminate your access to μLearn platform.
                </li>
                <li>
                  On termination of these Terms, Clause 4 (Intellectual property
                  rights), Clause 6 (Liability) and Clause 8 (Confidentiality)
                  shall continue notwithstanding such termination.
                </li>
              </ol>
            </li>
          </section>

          {/* 10. Privacy Policy */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                10. Privacy Policy:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  Please view our <a href="/privacypolicy" className="text-[#F56600] hover:underline transition duration-150">privacy policy</a> for more details.
                </li>
              </ol>
            </li>
          </section>

          {/* 11. Indemnification */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                11. Indemnification:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  You agree to indemnify, defend and hold μLearn, its affiliates,
                  its content providers and their Representatives harmless from and
                  against any and all claims, liability, losses, damages, costs and
                  expenses (including reasonable legal fees on a solicitor and
                  client basis) incurred by us as a result of or in connection with
                  any breach or alleged breach by you or anyone acting on your
                  behalf of any of these Terms.
                </li>
              </ol>
            </li>
          </section>

          {/* 12. Force Majeure */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                12. Force Majeure:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  Neither Party shall be liable for delays in performance when
                  caused by any of the following, which are beyond the reasonable
                  control of the delayed Party: Acts of God, Acts of the public
                  enemy, acts or failure to act by the other Party, acts of civil or
                  military authority, governmental priorities, strikes or other
                  labour disturbances, hurricanes, earthquakes, fires, floods,
                  epidemics, embargoes, war, riots. In the event of any such delay,
                  the date of delivery or of performance shall be extended for a
                  period equal to the effect of time lost by reason of the delay.
                </li>
              </ol>
            </li>
          </section>

          {/* 13. Amendment */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                13. Amendment:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  We may update or amend these Terms from time to time to comply
                  with law or to meet its changing business requirements or to
                  correct any errors without notice to you. Any updates or
                  amendments will be posted on the Website. If there is any conflict
                  between these Terms, any applicable Additional Terms and the Terms
                  and Conditions of Website Use, the conflict shall be resolved
                  according to the following order of priority: (i) the Additional
                  Terms; (ii) the Terms; and (iii) the Terms and Conditions of
                  Website Use.
                </li>
              </ol>
            </li>
          </section>

          {/* 14. General terms */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                14. General terms:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  These Terms together with the Website Disclaimer constitutes the
                  entire agreement between the parties on the subject matter hereof,
                  and supersedes all prior or contemporaneous written or verbal
                  agreements and understandings with you in connection therewith. If
                  any provision of these Terms is held by a court of competent
                  jurisdiction to be invalid, void or unenforceable, the remaining
                  provisions shall, nevertheless, continue in full force and effect
                  without being impaired or invalidated in any way.
                </li>
              </ol>
            </li>
          </section>

          {/* 15. Governing Law & Jurisdiction */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                15. Governing Law & Jurisdiction:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  These Terms shall be governed by and construed in accordance with
                  Indian law and courts at **Trivandrum** shall have exclusive
                  jurisdiction with respect of any dispute or other action arising
                  as a result of, in relation to or regarding these Terms to the
                  exclusion of any other court that may have jurisdiction in the
                  matter.
                </li>
              </ol>
            </li>
          </section>

          {/* 16. Contact Information */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                16. Contact Information:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  If you have any comments, questions or concerns about any of the
                  information in this Agreement, or any other issues relating to the
                  Processing of Personal Data carried out by us, or on our behalf,
                  you can contact us by any of the following methods:
                  <address className="not-italic mt-3 leading-relaxed space-y-1">
                    <p>
                      Email : <a href="mailto:mulearnadmin@gtechindia.org" className="text-[#F56600] hover:underline transition duration-150">mulearnadmin@gtechindia.org</a>
                    </p>
                    <p>
                      Postal Address : Technopark Trivandrum, Kazhakkoottam, Trivandrum - 695581, Kerala, India
                    </p>
                    <p>
                      Telephone : +91 99957 10101
                    </p>
                  </address>
                </li>
              </ol>
            </li>
          </section>

          {/* 17. Cookies and similar technologies (Content was mislabeled as Clause 13.ii in original list) */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                17. Cookies and similar technologies:
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  We may Process your Personal Data by placing or reading Cookies
                  and similar technologies. For more information, please see our
                  <a href="/cookiepolicy" className="text-[#F56600] hover:underline transition duration-150">Cookie Policy</a>. When you visit our Website we may place Cookies
                  onto your device, or read Cookies already on your device,
                  subject always to obtaining your consent, where required, in
                  accordance with Applicable Law. We use Cookies to record
                  information about your device, your browser and in some cases,
                  your preferences and browsing habits. We may process your
                  Personal Data through Cookies and similar technologies, in
                  accordance with our Cookie Policy and Privacy Policy.
                </li>
              </ol>
            </li>
          </section>

          {/* 18. Terms of Service (Final Conclusion/Communication Clause - Content was mislabeled as Clause 13.iii in original list) */}
          <section>
            <li className="list-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                18. Terms of Service (Communication):
              </h2>
              <ol className="list-[lower-roman] list-inside pl-5 space-y-3 text-base leading-relaxed">
                <li>
                  Please use English language for all official communications.
                  Should you have any questions regarding these Terms, please feel
                  free to reach out to <a href="mailto:mulearnadmin@gtechindia.org" className="text-[#F56600] hover:underline transition duration-150">mulearnadmin@gtechindia.org</a>.
                </li>
                <li>
                  All use of our Website(s), or our Services is subject to
                  these Terms. We recommend that you review our Terms of Use
                  regularly, in order to review any changes we might make from
                  time to time. Any changes to this Agreement will be posted on
                  the Website and will become effective and be binding on you
                  immediately upon posting in our Website. μLearn may also change
                  the terms by notifying you by any other reasonable form of
                  notification, effective immediately upon notice being provided.
                  Your continued use of the μLearn platform constitutes your
                  acceptance of those changes.
                </li>
              </ol>
            </li>
          </section>
        </ol>

      </div>
    </main>
  );
};

export default TermsAndConditionsPage;