import React from "react";
import pr_biju_cherian from "../../../images/photos/Photos/pr_biju_cherian.jpg";
import br_rejoy from "../../../images/photos/Photos/br_rejoy_stephan.jpg";
import br_linu_thomas from  "../../../images/photos/Photos/br_linu_thomas.jpg";
import sr_neethu_mary_mathew from  "../../../images/photos/Photos/sr_neethu_rejoy.jpg";
import sr_suja_biju from  "../../../images/photos/Photos/sr_suja_biju.jpg";
import "./LeadersList.css";
import LeaderItem from "./LeaderItem";

const LeadersList = function (props) {
  return (
    <div className="LeadersList">
      <LeaderItem
        image={pr_biju_cherian}
        name="Pr. Biju Cherian"
        designation="Pastor"
        decription='He was born in India and trained as a counsellor for Alcohol and Drug Addicts in Mumbai. He counselled in a number of chemically dependant people in India before responding to God’s call to become a Pentecostal Minister in the UK. His wife is Suja Cherian and God gave them two boys Reuben and Ryan. He has been ministering to the  Church of God UK, for more than a decade. For 11 years he pastored in Birkenhead Church of God and then  pastoring Manchester Mahanaim Church of God since January 2017. God helped him to plant two churches in 2 different counties, Keighley and Telford.'
        socialMedia = {true}
        fb='https://www.facebook.com/bijujoseph.cherian'
        wa='https://wa.me/447411539877'
     />

      <LeaderItem
        image={br_rejoy}
        name="Br. Rejoy Stephan"
        designation="Worship Leader"
        decription='He was born as the son of Pr. Francis Stephan and Eliyamma Stephan at Thrissur, India. From his very young age itself his parents encouraged him to indulge in Sunday school, distributing tracts, outreach ministries and has taught him that toiling in his vineyard is the best thing in the world. They have prayed and supported him to grow in faith.
        As his parents were getting transferred to different places as part of the ministry, he studied in different schools. He learnt keyboard and did sound mixing at this time which helped his father in his ministry. 
        He graduated from Peniel Bible Seminary, Perumbavoor in 2012. From his college times itself he had a good time leading the worship under Pr. Sabu Samuel (Malampuzha Church, Palakad), Pr. N. G. Samkutty (Church of God Gospel Centre, Palarivattom), Pr. Saji M George (Bethlehem Community Church, Thrissur), Pr. Daniel Ayiroor (Voice of Gospel Church, Thrissur) and in many conventions and camps.
        He moved to Wellington, Telford, UK with family and since then he is the part of Mahanaim Church of God. On July 03,2021, by Gods grace a branch of Mahanaim COG came into being in Telford. He is assisting Pr. Biju Cherian in Gods ministry. Wife : Neethu Mary Mathew. Son : Evan Rejoy'
        socialMedia = {true}
        fb='https://www.facebook.com/rejoystephan.thadathil'
      wa='https://wa.me/447404535362'
      />

<LeaderItem
        image={br_linu_thomas}
        name="Br. Linu Thomas"
        designation=" Administration"
        decription='Son of Mr. V. Thomas and Mrs. Alice Thomas was born in Delhi, India natively from Adoor, India. Though his maternal family is from Pentecostal, he used to go to Marthoma church until the age of 30. In the year of 2016 he went to Masirah, a small island in Oman, where he learned about the truth of baptism and its importance. He is a nurse by profession. He came to the UK in March 2022 and has been a part of Mahanaim CoG, Telford since then. Within this short time itself he has proved to be well determined and passionate towards the work of God. Despite language barriers he is not afraid to proclaim Gods word.
        His wife Merlin Mathew, Jerome (son) and Serah (daughter).'
        socialMedia = {true}
        fb='https://www.facebook.com/linuthomas911'
        wa='https://wa.me/447721687207 '
      />

<LeaderItem
        image={sr_suja_biju}
        name="Br. Gijo George"
        designation="Treasurer"
        decription=''
        socialMedia = {false}
            />

<LeaderItem
        image={sr_neethu_mary_mathew}
        name="Sis. Sini Mathew"
        designation="- Sunday School Coordinator"
        decription=''
        socialMedia = {true}
        fb='https://www.facebook.com/neethumary.mathew.7'
        wa='https://wa.me/447459495028'
      />

<LeaderItem
        image={sr_neethu_mary_mathew}
        name="Br. Sam Mathai"
        designation="YPE Secretary"
        decription=''
        socialMedia = {false}
        
      />
          <LeaderItem
        image={sr_neethu_mary_mathew}
        name="Sis. Raji Joby"
        designation="Ladies Coordinater"
        decription=''
        socialMedia = {true}
        fb='https://www.facebook.com/neethumary.mathew.7'
        wa='https://wa.me/447459495028'
      />
          <LeaderItem
        image={sr_neethu_mary_mathew}
        name="Sis.Tinku Rachel Thomas"
        designation="Prayer Coordinater"
        decription=''
        socialMedia = {true}
        fb='https://www.facebook.com/neethumary.mathew.7'
        wa='https://wa.me/447459495028'
      />
          
          
 <LeaderItem
        image={sunday_school_teachers}
        name="Br. Tijo Abraham David "
        designation="Choir Coordinater"
        decription=''
        socialMedia = {false}
      /> 
<LeaderItem
        image={sunday_school_teachers}
        name="Sis. Renu Chandy"
        designation="Safeguarding Coordinater"
        decription=''
        socialMedia = {false}
      /> 

          
    </div>
  );
};

export default LeadersList;
