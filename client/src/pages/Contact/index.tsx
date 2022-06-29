import { useGlobalState, useOrientation } from 'utils/hooks';
import Map from '../../components/Map';
import './index.sass';

const Contact = (): JSX.Element => {
  const state = useGlobalState();
  const isLandscape = useOrientation() === 'landscape';
  const { font, background } = state.themeReducer.THEME;
  const { latitude, longitude, zoom, markerLatitude, markerLongitude } =
    state.languageReducer.CONTENT.contact.map;

  return (
    <main
      className="contact page__container"
      style={{ backgroundColor: background.default, color: font.default }}
    >
      <section className="contact__form_container"></section>
      {isLandscape && (
        <section className="contact__map_container">
          <div className="contact__map">
            <Map
              latitude={latitude}
              longitude={longitude}
              zoom={zoom}
              markerLatitude={markerLatitude}
              markerLongitude={markerLongitude}
            />
          </div>
        </section>
      )}
    </main>
  );
};

export default Contact;
