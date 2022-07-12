import { useGlobalState, useOrientation } from 'utils/hooks';
import FormContainer from 'components/FormContainer';
import Map from 'components/Map';
import './index.sass';

const Contact = (): JSX.Element => {
  const state = useGlobalState();
  const isLandscape = useOrientation() === 'landscape';
  const { font, background } = state.themeReducer.THEME;
  const { map } = state.languageReducer.CONTENT.contact;

  return (
    <main
      className="contact page__container"
      style={{ backgroundColor: background.default, color: font.default }}
    >
      <FormContainer />
      {isLandscape && (
        <section className="contact__map_container">
          <div className="contact__map">
            <Map
              latitude={map.latitude}
              longitude={map.longitude}
              zoom={map.zoom}
              markerLatitude={map.markerLatitude}
              markerLongitude={map.markerLongitude}
            />
          </div>
        </section>
      )}
    </main>
  );
};

export default Contact;
