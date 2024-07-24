export default function Image({rounded=false, height, width, alt, img}) {

    const styles = {
        height: height,
        width: width,
        borderRadius: rounded ? '12px' : '0px', 
        cursor: 'pointer'
    }

    return(
        <img src={img} alt={alt} styles={styles}/>
    )
}