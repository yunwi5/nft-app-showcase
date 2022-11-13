import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';
import Button from './Button';

interface Props {
    title: string;
    description: string;
    showBtn?: boolean;
    mockupImg: string;
    banner?: string;
    reverse?: boolean;
}

const APP_LINK = 'https://expo.dev/@yunwi5/nft-app?serviceType=classic&distribution=expo-go';

const SectionWrapper: React.FC<Props> = (props) => {
    const { title, description, showBtn, mockupImg, banner, reverse } = props;

    return (
        <div
            className={`min-h-screen flex flex-row md:flex-col ${styles.section} ${
                reverse ? styles.bgWhite : styles.bgPrimary
            } ${banner}`}
        >
            <div
                className={`flex items-center ${
                    reverse ? styles.boxReverseClass : styles.boxClass
                } w-11/12 sm:w-full minmd:w-3/4`}
            >
                <div
                    className={`${styles.descDiv} ${
                        reverse ? 'fadeRightMini' : 'fadeLeftMini'
                    } ${reverse ? styles.textRight : styles.textLeft} fadeLeftMini`}
                >
                    <h1
                        className={`${styles.h1Text} ${
                            reverse ? styles.blackText : styles.whiteText
                        }`}
                    >
                        {title}
                    </h1>
                    <p
                        className={`${styles.descriptionText} ${
                            reverse ? styles.blackText : styles.whiteText
                        }`}
                    >
                        {description}
                    </p>

                    {showBtn && <Button assetUrl={assets.expo} link={APP_LINK}></Button>}
                </div>
                <div
                    className={`flex-1 ${styles.flexCenter} p-8 sm:px-0 md:min-w-[25rem] md:max-w-[30rem] max-h-[30rem]`}
                >
                    <img
                        src={mockupImg}
                        alt="mockup"
                        className={`${styles.sectionImg} ${
                            reverse ? 'fadeLeftMini' : 'fadeRightMini'
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper;
