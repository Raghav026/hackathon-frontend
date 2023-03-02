import ConfettiExplosion from 'react-confetti-explosion';


function Confettis({isExploding}) {
 return <>{isExploding && <ConfettiExplosion />}</>;
}
export default Confettis