import styles from '@/styles/Content.module.css'
import { Title } from '@/components/Title'
import { Description } from '@/components/Description'
import { Logos } from '@/layout/Logos'
import { Tags } from '@/layout/Tags'

export function Content(){
    return (
        <>
            <div className={styles.content}>

                <div className={styles.content_title}>
                    <Title text="Frase curta e objetiva" />
                </div>

                <div className={styles.content_description}>
                    <Description text="Phasellus rhoncus odio nec felis vehicula molestie. Aenean nunc lacus, volutpat ac tristique at, euismod et tortor. Cras odio libero, sodales at lacinia et, pharetra in eros. Nam malesuada velit ut sem tempus consequat. Integer metus felis, blandit id nisl volutpat, porta ultricies neque. Phasellus placerat tempus mauris, at commodo magna ullamcorper et. Nullam ornare blandit nunc, ac dapibus tellus molestie sit amet. Nam tempor quam metus, sed aliquam diam eleifend nec. Sed vestibulum eros massa, nec varius purus vestibulum vitae. Duis eu libero quis leo pharetra egestas sed sed nisl.

                    Nam pretium tellus nec lacus consequat facilisis et ut neque. Vivamus in ex quis nisl egestas malesuada in vitae diam. Donec urna elit, imperdiet at scelerisque ac, laoreet at ex. Morbi in est non risus tempus convallis. In sit amet luctus tellus. Quisque varius quis ante quis convallis. Curabitur ut leo a justo sollicitudin vehicula. Pellentesque nulla quam, condimentum a elit at, molestie congue felis. Curabitur aliquam, mauris vitae volutpat tincidunt, nunc ipsum rutrum ante, quis porta purus felis ut arcu. Vestibulum lectus nulla, pulvinar at posuere at, hendrerit in libero.

                    Donec sodales orci a diam finibus consectetur eget sit amet augue. Integer auctor rhoncus nisl et euismod. Proin et ex quis velit aliquam suscipit condimentum a odio. In neque neque, euismod id congue a, malesuada eget nibh. Quisque tortor odio, varius nec quam eu, placerat lobortis magna. Mauris pulvinar dictum vulputate. Duis vulputate, orci sed posuere iaculis, tortor justo posuere elit, eget fringilla sem nisi id velit. Nullam rhoncus turpis sit amet volutpat posuere. Nullam vel urna lacus. Donec justo purus, varius a pellentesque ut, vestibulum eget urna. Integer rutrum finibus lectus, euismod blandit libero mattis ullamcorper. Vivamus fringilla justo id metus commodo, a rutrum dolor ultricies. Vivamus risus sem, consectetur eget hendrerit sit amet, vehicula at libero." />
                </div>

                <Logos />
                
                <Tags />

            </div>
        </>
    )
}