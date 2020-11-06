import React from 'react';
import visa from '../../assets/images/icons/visa.svg';
import jcb from '../../assets/images/icons/jcb.svg';
import descobrir from '../../assets/images/icons/descobrir.svg';
import hipercard from '../../assets/images/icons/hipercard.png';
import clubeDiners from '../../assets/images/icons/clube-de-diners.svg';
import expressoAmericano from '../../assets/images/icons/expresso-americano.svg';
import styles from './style.module.css';

export default function CardCred({ cvv, flipped, number, holderName, expiration, brand }) {

    // console.log(brand)

    return (
        <div className={styles.containerCardCred}>
            <div className={styles.card} id={flipped ? styles.rotateTrue : null}>
                <div className={styles.flip}>
                    <div className={styles.front}>
                        <div className={styles.stripBottom}></div>
                        <div className={styles.stripTop}></div>

                        {/* <svg className={styles.logo} width="30" height="30" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.62691 0C6.91867 0.114035 7.12685 0.32559 7.32235 0.543436C7.94392 1.23787 8.35656 2.06915 8.68712 2.94604C8.93336 3.59958 9.48702 3.86461 10.122 3.61688C10.7264 3.38094 11.0689 2.88391 11.342 2.31216C11.3641 2.24763 11.3972 2.18792 11.4398 2.13599C11.4681 2.30823 11.3652 2.82492 11.2622 3.11748C10.9309 4.04156 10.2705 4.4686 9.36316 4.52601C9.12438 4.54096 9.10647 4.56927 9.22586 4.79655C9.49449 5.30774 9.74819 5.84095 10.1959 6.20351C10.8622 6.74144 11.5853 7.16533 12.4531 7.22039C12.6113 7.23061 12.768 7.25578 12.9254 7.27622C12.9433 7.27622 12.9597 7.29588 13 7.31948C12.4135 7.53418 11.839 7.65687 11.242 7.48385C10.5166 7.26907 9.82738 6.93662 9.199 6.49843C8.95847 6.32568 8.684 6.21249 8.39611 6.16733C7.93497 6.10363 7.52233 6.44337 7.32161 7.00333C7.09775 7.63248 7.13879 8.26164 7.26415 8.89867C7.3432 9.32716 7.48866 9.739 7.6947 10.1177C7.49696 10.039 7.40891 9.88173 7.29773 9.75747C6.87526 9.29393 6.57373 8.72309 6.42246 8.10042C6.30158 7.59945 6.38217 7.10556 6.512 6.61954C6.64162 6.11411 6.8301 5.62753 7.07313 5.1709C7.4022 4.56612 7.50517 3.89685 7.58501 3.215C7.71559 2.09825 7.24699 1.18518 6.74332 0.277616C6.69855 0.196612 6.62691 0.128978 6.62691 0Z" fill="white" />
                            <path d="M5.49935 12.9999C5.65893 12.5798 5.75948 12.1373 5.79782 11.6866C5.88736 10.7782 5.78737 9.90289 5.3046 9.11644C5.07477 8.7413 4.67258 8.63199 4.27711 8.80186C3.93013 8.94814 3.63539 9.18722 3.30707 9.36889C2.77504 9.66459 2.23183 9.93199 1.6416 10.0767C1.07151 10.2198 0.535011 10.0901 0 9.86592C1.79904 9.76683 3.11157 8.91589 3.8585 7.13302C3.05859 7.06066 2.31614 6.8845 1.89082 6.0721C1.66907 5.66476 1.54916 5.20471 1.54235 4.73513C1.70278 4.97107 1.7968 5.25026 1.96992 5.47597C2.29077 5.89514 2.66909 6.22467 3.2041 6.25613C3.73911 6.28758 4.08758 6.12164 4.31591 5.47911C4.65915 4.51257 5.12551 3.61759 5.8605 2.90979C6.00677 2.75015 6.18904 2.63218 6.39029 2.56689C6.25523 2.82485 6.13286 3.04348 6.02391 3.26919C5.7344 3.86611 5.46279 4.48111 5.40533 5.15667C5.32176 6.13423 5.45906 7.07796 5.90602 7.96508C6.20449 8.56121 6.35373 9.21239 6.44924 9.87615C6.50968 10.3048 6.54773 10.7412 6.44924 11.1667C6.29478 11.8643 5.94482 12.4581 5.49935 12.9999Z" fill="white" />
                            <path d="M10.163 2.00296C10.1607 2.1999 10.0859 2.3882 9.95431 2.52806C9.82273 2.66791 9.64471 2.74838 9.45788 2.75245C9.27485 2.74348 9.10156 2.66292 8.97187 2.52652C8.84217 2.39011 8.76537 2.20764 8.75647 2.01476C8.75936 1.8187 8.83334 1.63125 8.96321 1.49085C9.09308 1.35046 9.26901 1.26778 9.45489 1.25977C9.64213 1.25997 9.82167 1.33824 9.95435 1.47748C10.087 1.61672 10.162 1.80563 10.163 2.00296Z" fill="white" />
                            <path d="M3.50619 3.84517C3.59698 3.84181 3.68749 3.85754 3.77245 3.89144C3.85741 3.92535 3.93511 3.97674 4.00103 4.04262C4.06695 4.10851 4.11975 4.18757 4.15637 4.27519C4.19299 4.36281 4.21269 4.45724 4.21432 4.55297C4.2157 4.65198 4.19842 4.75029 4.16347 4.84221C4.12852 4.93412 4.0766 5.0178 4.01073 5.0884C3.94486 5.159 3.86634 5.21511 3.77973 5.25348C3.69312 5.29184 3.60014 5.3117 3.50619 5.3119C3.32271 5.30818 3.14797 5.22858 3.01968 5.09028C2.89139 4.95198 2.81983 4.76605 2.82045 4.57263C2.81791 4.47677 2.83387 4.38136 2.86737 4.2922C2.90087 4.20304 2.95121 4.12198 3.01534 4.05395C3.07947 3.98592 3.15605 3.93233 3.24043 3.89644C3.32481 3.86055 3.41522 3.84311 3.50619 3.84517Z" fill="white" />
                        </svg> */}

                        {/* <div className={styles.investor}>Kickante</div> */}
                        <div className={styles.chip}>
                            <div className={styles.chipLine}></div>
                            <div className={styles.chipLine}></div>
                            <div className={styles.chipLine}></div>
                            <div className={styles.chipLine}></div>
                            <div className={styles.chipMain}></div>
                        </div>
                        <svg className={styles.wave} viewBox="0 3.71 26.959 38.787" width="26.959" height="38.787" fill="white"><path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path><path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path><path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path></svg>
                        <div
                            className={styles.cardNumber}>
                            <div className={styles.section}>{number ? number : '0000 0000 0000 0000'}</div>
                        </div>
                        <div className={styles.end}><span className={styles.endText}>Data. Val:</span><span className={styles.endDate}> {expiration ? expiration : '00/00'}</span></div>
                        <div className={styles.cardHolder}>{holderName ? holderName : 'Nome do Titular'}</div>

                        {brand === 'mastercard' ?
                            <div className={styles.master}>
                                <div className={styles.circleMasterRed}></div>
                                <div className={styles.circleMasterYellow}></div>
                            </div>
                            : brand === 'visa' ?
                                <div className={styles.master}>
                                    <img src={visa} alt="visa" style={{ width: 50 }} />
                                </div>
                                : brand === 'amex' ?
                                    <div className={styles.master}>
                                        <img src={expressoAmericano} alt="expresso-americano" style={{ width: 50 }} />
                                    </div>
                                    : brand === 'jcb' ?
                                        <div className={styles.master}>
                                            <img src={jcb} alt="jcb" style={{ width: 50 }} />
                                        </div>
                                        : brand === 'diners' ?
                                            <div className={styles.master}>
                                                <img src={clubeDiners} alt="clube-de-diners" style={{ width: 50 }} />
                                            </div>
                                            : brand === 'discover' ?
                                                <div className={styles.master}>
                                                    <img src={descobrir} alt="discover" style={{ width: 50 }} />
                                                </div>
                                                : brand === 'hipercard' ?
                                                    <div className={styles.master}>
                                                        <img src={hipercard} alt="hipercard" style={{ width: 70 }} />
                                                    </div>
                                                    : null}

                    </div>
                    <div className={styles.back}>
                        <div className={styles.stripBlack}></div>
                        <div className={styles.ccv}><label>ccv</label>
                            <div>{cvv ? cvv : '***'}</div>
                        </div>
                        <div className={styles.terms}>
                            <p>Adicione o cartão para realizar a doação.</p>
                        </div>
                    </div>
                </div>
            </div><a className={styles.inspiration} href="https://dribbble.com/shots/4268384-Credit-card-design" target="_blank">inspiration</a>
        </div>
    )
}