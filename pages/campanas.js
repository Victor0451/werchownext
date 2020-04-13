import React from 'react';
import GestionCampanas from '../components/campañas/GestionCampanas'
import Layout from '../components/layout/Layout';

function campanas(props) {
    return (
        <div>
            <Layout>
                <GestionCampanas />
            </Layout>
        </div>
    );
}

export default campanas;