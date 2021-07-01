import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, device, typography } from "../shared/styles";
import { Stars } from "./Stars";
import { Expandable } from "./Expandable";

export const CUSTOMERCARD_TYPES = {
  JIRA_STATS: "JiraStats",
  KAMMI: "Kammi",
  SD_FEEDBACK: "SDFeedback",
};

const mediaDevice = device.mobileL;

const Container = styled.div`
  width: 363px;
  display: flex;
  position: relative;

  @media ${mediaDevice} {
    width: 455px;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  background: white;
  border: 1px solid #e4e5e9;
  box-shadow: 1.33333px 2.66667px 6.66667px rgba(0, 0, 0, 0.1);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 22px;
    height: 22px;
  }

  @media ${mediaDevice} {
    width: 60px;
    height: 60px;

    svg {
      width: 33px;
      height: 33px;
    }
  }
`;

const TotalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 90px;
  height: 75px;
  background: ${colors.secondary.CCDarkBlue};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media ${mediaDevice} {
    width: 110px;
    height: 90px;
  }
`;

const BodyContainer = styled.div`
  width: 331px;
  margin-left: 20px;
  margin-top: 20px;
  background: ${(props) => props.backgroundColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media ${mediaDevice} {
    width: 400px;
    margin-left: 29px;
    margin-top: 29px;
  }
`;

const NameContainer = styled.div`
  width: 243px;
  margin-top: 25px;
  margin-left: 30px;

  @media ${mediaDevice} {
    width: 335px;
    margin-left: 45px;
  }
`;

const TotalLabel = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s1};
  line-height: 15px;
  margin-top: 15px;
  text-align: center;
  color: ${colors.neutral.Gray6};

  @media ${mediaDevice} {
    font-size: ${typography.size.s2};
    line-height: 18px;
    margin-top: 15px;
  }
`;

const TotalNumber = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: 22px;
  line-height: 28px;
  margin-top: 1px;
  text-align: center;
  color: ${colors.neutral.Gray6};

  @media ${mediaDevice} {
    font-size: ${typography.size.m3};
    line-height: 34px;
    margin-top: 0px;
  }
`;

const TextCustomer = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2};
  line-height: 18px;
  color: ${colors.neutral.Gray6};
  width: 215px;
  overflow: hidden;

  @media ${mediaDevice} {
    font-size: ${typography.size.s3};
    line-height: 20px;
    width: 290px;
  }
`;

const TextService = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: 22px;
  line-height: 28px;
  color: ${colors.neutral.CCWhite};
  width: 215px;
  overflow: hidden;

  @media ${mediaDevice} {
    font-size: ${typography.size.m3};
    line-height: 34px;
    width: 290px;
  }
`;

const Stats = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s3};
  line-height: 20px;
  margin-left: 30px;
  margin-top: 17px;
  margin-bottom: 10px;
  color: ${colors.neutral.CCWhite};

  @media ${mediaDevice} {
    margin-left: 45px;
    margin-top: 20px;
  }
`;

const Divider = styled.div`
  opacity: 0.3;
  border: 1px solid ${(props) => props.dividerColor};
  height: 0px;
  width: 331px;

  @media ${mediaDevice} {
    width: 400px;
  }
`;

const Numbers = styled.div`
  width: 331px;
  height: 48px;
  margin-top: 10px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  :nth-of-type(odd) {
    margin-bottom: 27px;
  }

  @media ${mediaDevice} {
    width: 445px;
    height: 54px;
    margin-left: 45px;
    :nth-of-type(odd) {
      margin-bottom: 42px;
    }
  }
`;

const ValueContainer = styled.div`
  display: flex;
  width: 81px;
  flex-direction: column;

  @media ${mediaDevice} {
    width: 120px;
  }
`;

const Label = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2};
  line-height: 18px;
  color: ${colors.neutral.Gray6};
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Number = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3};
  line-height: 28px;
  color: ${colors.neutral.CCWhite};
  margin-top: 2px;
`;

const Unit = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s2};
  line-height: 18px;
  color: ${colors.neutral.CCWhite};
  margin-left: 3px;
`;

const RatingContainer = styled.div`
  height: 20px;
  width: 70px;
  margin-left: 30px;
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media ${mediaDevice} {
    margin-left: 45px;
    margin-top: 18px;
  }
`;

const Rating = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s3};
  line-height: 20px;
  color: ${colors.neutral.CCWhite};
`;

const Avg1 = styled.div`
  display: none;

  @media ${mediaDevice} {
    display: block;
    font-family: ${typography.type.primary};
    font-style: normal;
    font-weight: ${typography.weight.reqular};
    font-size: ${typography.size.s2};
    line-height: 18px;
    color: ${colors.neutral.Gray6};
    margin-left: 5px;
  }
`;

const Avg2 = styled.div`
  display: block;
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.reqular};
  font-size: ${typography.size.s2};
  line-height: 18px;
  color: ${colors.neutral.Gray6};

  @media ${mediaDevice} {
    display: none;
  }
`;

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 8px;
  margin-bottom: 24px;

  @media ${mediaDevice} {
    margin-left: 45px;
    margin-top: 5px;
    margin-bottom: 35px;
  }
`;

const Ratings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 10px;

  @media ${mediaDevice} {
    margin-top: 5px;
  }
`;

const RatingAvg = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3};
  line-height: 34px;
  color: ${colors.neutral.CCWhite};
`;

const RatingMax = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s2};
  line-height: 18px;
  color: ${colors.neutral.CCWhite};
  margin-left: 2px;

  @media ${mediaDevice} {
    font-weight: ${typography.weight.regular};
  }
`;

const JiraCode = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.semibold};
  font-size: ${typography.size.s2};
  line-height: 150%;
  color: ${colors.neutral.CCWhite};
  text-decoration-line: underline;

  @media ${mediaDevice} {
    font-size: ${typography.size.s3};
  }
`;

const Comment = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2};
  line-height: 150%;
  color: ${colors.neutral.Gray6};
  margin-bottom: 10px;
  width: 281px;

  @media ${mediaDevice} {
    width: 311px;
    font-size: ${typography.size.s3};
  }
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 3px;

  @media ${mediaDevice} {
    margin-bottom: 0px;
  }
`;

const TotalNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
`;

const MonthYear = styled.div`
  margin-top: 15px;
  margin-left: 30px;
  margin-bottom: 10px;
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s3};
  line-height: 20px;
  color: ${colors.neutral.Gray6};

  @media ${mediaDevice} {
    margin-top: 18px;
    margin-left: 45px;
  }
`;

const ExpandableContainer = styled.div`
  margin-left: 30px;
  margin-top: 13px;
  margin-bottom: 26px;
  width: 280px;

  @media ${mediaDevice} {
    margin-left: 45px;
    width: 390px;
  }
`;

const SlaHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 17px;
  margin-bottom: 5px;

  @media ${mediaDevice} {
    margin-top: 22px;
  }
`;

const SlaHeaderItem = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.semibold};
  font-size: ${typography.size.s2};
  line-height: 21px;
  color: ${colors.neutral.Gray6};

  @media ${mediaDevice} {
    font-size: ${typography.size.s3};
    line-height: 24px;
  }
`;

const DateItem = styled(SlaHeaderItem)`
  width: 106px;
  color: ${colors.neutral.CCWhite};

  @media ${mediaDevice} {
    width: 142px;
  }
`;

const HeaderDateItem = styled(DateItem)`
  color: ${colors.neutral.Gray6};
  line-height: 18px;

  @media ${mediaDevice} {
    font-weight: ${typography.weight.regular};
    line-height: 18px;
  }
`;

const SlaItem = styled(SlaHeaderItem)`
  width: 85px;
  color: ${colors.neutral.CCWhite};

  @media ${mediaDevice} {
    width: 118px;
  }
`;

const HeaderSlaItem = styled(SlaItem)`
  color: ${colors.neutral.Gray6};
  line-height: 18px;

  @media ${mediaDevice} {
    font-weight: ${typography.weight.regular};
    line-height: 18px;
  }
`;

const IncidentItem = styled(SlaHeaderItem)`
  width: 83px;
  color: ${colors.neutral.CCWhite};

  @media ${mediaDevice} {
    width: 120px;
  }
`;

const HeaderIncidentItem = styled(IncidentItem)`
  color: ${colors.neutral.Gray6};
  line-height: 18px;

  @media ${mediaDevice} {
    font-weight: ${typography.weight.regular};
    line-height: 18px;
  }
`;

const SlaRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 8px;

  @media ${mediaDevice} {
    margin-bottom: 10px;
  }
`;

function Header({ logo, totalLabel, totalNumber, totalUnit }) {
  return (
    <>
      <LogoContainer>{logo}</LogoContainer>
      <TotalContainer>
        <TotalLabel>{totalLabel}</TotalLabel>
        <TotalNumberContainer>
          <TotalNumber>{totalNumber}</TotalNumber>
          <Unit>{totalUnit}</Unit>
        </TotalNumberContainer>
      </TotalContainer>
    </>
  );
}

function JiraStats({ item }) {
  // TODO: check item integrity

  return (
    <Container type={item.type}>
      <Header
        totalLabel={item.totalLabel}
        totalNumber={item.totalNumber}
        totalUnit=""
        logo={item.logo}
      />
      <BodyContainer type={item.type} backgroundColor={item.backgroundColor}>
        <NameContainer>
          <TextCustomer>{item.customer}</TextCustomer>
          <TextService>{item.service}</TextService>
        </NameContainer>
        {item.stats.map((stat, index) => {
          return (
            <Fragment key={index}>
              <Stats>{stat.statsName}</Stats>
              <Divider dividerColor={item.dividerColor} />
              <Numbers>
                {stat.values.map((value, index) => {
                  return (
                    <ValueContainer key={index}>
                      <Label>{value.label}</Label>
                      <NumberContainer>
                        <Number>{value.number}</Number>
                        <Unit>{value.unit}</Unit>
                      </NumberContainer>
                    </ValueContainer>
                  );
                })}
              </Numbers>
            </Fragment>
          );
        })}
      </BodyContainer>
    </Container>
  );
}

function SDFeedback({ item }) {
  // TODO: check item integrity

  return (
    <Container type={item.type}>
      <Header
        totalLabel={item.totalLabel}
        totalNumber={item.totalNumber}
        totalUnit=""
        logo={item.logo}
      />
      <BodyContainer type={item.type} backgroundColor={item.backgroundColor}>
        <NameContainer>
          <TextCustomer>{item.customer}</TextCustomer>
          <TextService>{item.service}</TextService>
        </NameContainer>
        <RatingContainer>
          <Rating>Rating</Rating>
          <Avg1>(Avg)</Avg1>
        </RatingContainer>
        <Divider dividerColor={item.dividerColor} />
        {item.feedbacks.length ? (
          <FeedbackContainer>
            <Avg2>Avg.</Avg2>
            <Ratings>
              <RatingAvg>{item.feedbackAverage}</RatingAvg>
              <RatingMax>{`/ ${item.feedbackMax}`}</RatingMax>
            </Ratings>
            {item.feedbacks.map((feedback, index) => {
              return (
                <Fragment key={index}>
                  <StarContainer>
                    <JiraCode>{feedback.jiraCode}</JiraCode>
                    <Stars
                      starCount={feedback.stars}
                      dimColor={item.dimColor}
                    />
                  </StarContainer>
                  <Comment>{feedback.text}</Comment>
                </Fragment>
              );
            })}
          </FeedbackContainer>
        ) : (
          <FeedbackContainer>
            <Ratings>
              <RatingAvg>-</RatingAvg>
            </Ratings>
          </FeedbackContainer>
        )}
      </BodyContainer>
    </Container>
  );
}

function Kammi({ item }) {
  // TODO: check item integrity
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container type={item.type}>
      <Header
        totalLabel={item.totalLabel}
        totalNumber={item.totalNumber}
        totalUnit={item.totalUnit}
        logo={item.logo}
      />
      <BodyContainer type={item.type} backgroundColor={item.backgroundColor}>
        <NameContainer>
          <TextCustomer>{item.customer}</TextCustomer>
          <TextService>{item.service}</TextService>
        </NameContainer>
        <MonthYear>{`${item.month} ${item.year}`}</MonthYear>
        <Divider dividerColor={item.dividerColor} />
        <ExpandableContainer>
          <Expandable
            label={expanded ? "Hide daily SLAs" : "View daily SLAs"}
            isExpanded={expanded}
            onClick={() => handleClick()}
            textColor={colors.neutral.CCWhite}
            arrowColor={colors.neutral.CCWhite}
          >
            <SlaHeader>
              <HeaderDateItem>Date</HeaderDateItem>
              <HeaderSlaItem>SLA</HeaderSlaItem>
              <HeaderIncidentItem>Related incident</HeaderIncidentItem>
            </SlaHeader>
            {item.slas.map((sla, index) => {
              return (
                <SlaRowContainer key={index}>
                  <DateItem>{sla.date}</DateItem>
                  <SlaItem>
                    {sla.sla}
                    {item.totalUnit}
                  </SlaItem>
                  {sla.sla !== 100 && (
                    <IncidentItem>{sla.incident}</IncidentItem>
                  )}
                </SlaRowContainer>
              );
            })}
          </Expandable>
        </ExpandableContainer>
      </BodyContainer>
    </Container>
  );
}

export function CustomerCard({ item }) {
  if (item.type === CUSTOMERCARD_TYPES.JIRA_STATS) {
    return <JiraStats item={item} />;
  } else if (item.type === CUSTOMERCARD_TYPES.KAMMI) {
    return <Kammi item={item} />;
  } else if (item.type === CUSTOMERCARD_TYPES.SD_FEEDBACK) {
    return <SDFeedback item={item} />;
  } else {
    return null;
  }
}

CustomerCard.propTypes = {
  item: PropTypes.object,
};

CustomerCard.defaultProps = {
  item: null,
};
