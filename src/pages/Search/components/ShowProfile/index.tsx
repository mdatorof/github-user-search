import React, { useEffect, useState } from 'react';
import { ProfileGit } from "core/types/Profile";
import Button from "core/components/Button";
import { makeRequest } from 'core/utils/request';
import dayjs from 'dayjs'
import "./styles.css";
import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';

type Props = {
  user: string;
};

const ShowProfile = ({ user }: Props) => {

  const [profileGit, setProfileGit] = useState<ProfileGit>();
  const [isLoading, setIsLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({ url: user })
      .then((response) => setProfileGit(response.data))
      .catch(() => setIsFound(false))
      .finally(() => setIsLoading(false));
  }, [user]);

  return (
    <div className="profile-container">
      {isFound ? (
        <>
          { isLoading ? <ImageLoader /> : (
            <div>
              <img
                src={profileGit?.avatar_url}
                alt={profileGit?.name}
                title={profileGit?.name}
                className="avatar-image"
              />
            </div>
          )}
          {isLoading ? <InfoLoader /> : (
            <>
              <div>
                <div className="repo-box">
                  {`Repositórios Públicos: ${profileGit?.public_repos}`}
                </div>
                <div className="followers-box">
                  {`Seguidores: ${profileGit?.followers}`}
                </div>
                <div className="following-box">
                  {`Seguindo: ${profileGit?.following}`}
                </div>
              </div>
              <div className="info-container">
                <div className="info-tile">Informações</div>
                <div className="info-box"><b>Empresa:&nbsp;</b>
                  {profileGit?.company}
                </div>
                <div className="info-box"><b>Website/Blog:&nbsp;</b>
                  {profileGit?.blog}
                </div>
                <div className="info-box"><b>Localidade:&nbsp;</b>
                  {profileGit?.location}
                </div>
                <div className="info-box"><b>Membro desde:&nbsp;</b>
                  {dayjs(profileGit?.created_at).format('DD/MM/YYYY')}
                </div>
              </div>
              <div className="btn-position">
                <Button text="Ver perfil" path={profileGit?.html_url} />
              </div>
            </>
          )}
        </>) : (<div className="error-box error-text">Usuário não encontrado</div>)
      }
    </div>
  );
};

export default ShowProfile;