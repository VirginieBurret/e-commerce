import './footer.scss';

const Footer = () => {
    return (
<div className="footer">
   <div className="footerTop">
       <p>Retour en haut</p>
   </div>

   <div className="footer__links">
       <div className="footer__links__elmt">
           <span>Lien1</span>
           
       </div>
       <div className="footer__links__elmt">
           <span>Lien2</span>
       </div>
       <div className="footer__links__elmt">
           <span>Lien3</span>
       </div>
       <div className="footer__links__elmt">
           <span>Lien4</span>
       </div>
       <div className="footer__links__elmt">
           <span>Lien5</span>
       </div>
   </div>
</div>
    )
}

export default Footer;