import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card, Row, Col, Typography } from "antd";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip,
  ResponsiveContainer, LineChart, Line,
} from "recharts";
import {
  UserOutlined,
  AppstoreOutlined,
  ThunderboltOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "@/pages/env";
import { AIContributionDetail } from "@/types";
import TimelineVis from "@/components/Timeline/TimelineVis";

const { Title, Text } = Typography;

export default function RoomDashboard() {
  const router = useRouter();
  const { room } = router.query as { room?: string };
  const [contributions, setContributions] = useState<AIContributionDetail[]>([]);
  const [userStats, setUserStats] = useState<{ user: string; count: number }[]>([]);
  const [featureStats, setFeatureStats] = useState<{ feature: string; count: number }[]>([]);

  // Hook up PartySocket once `room` is available
  usePartySocket({
    host: PARTYKIT_HOST,
    room: room || "",        // empty string until `room` resolves
    party: "aicontr",
    onMessage(evt) {
      try {
        const msg = JSON.parse(evt.data);
        if (msg.type === "initial") {
          setContributions(msg.contributions);
        } else if (msg.type === "contribution") {
          const detail: AIContributionDetail = msg.detail;
          setContributions(prev =>
            prev.find(c => c.id === detail.id) ? prev : [...prev, detail]
          );
        }
      } catch (e) {
        console.error("Invalid message format", e);
      }
    },
  });

  // Whenever contributions change, recalc stats
  useEffect(() => {
    const userCount: Record<string, number> = {};
    const featureCount: Record<string, number> = {};

    contributions.forEach(({ user, prompt }) => {
      userCount[user] = (userCount[user] || 0) + 1;
      featureCount[prompt] = (featureCount[prompt] || 0) + 1;
    });

    setUserStats(
      Object.entries(userCount).map(([user, count]) => ({ user, count }))
    );
    setFeatureStats(
      Object.entries(featureCount).map(([feature, count]) => ({ feature, count }))
    );
  }, [contributions]);

  const totalActions = userStats.reduce((sum, u) => sum + u.count, 0);
  const topFeature = featureStats[0]?.feature || "N/A";

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Dashboard Overview: {room}</Title>

      {/* Stat Cards */}
      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12} md={6}>
          <Card style={{ background: "#1890ff", color: "#fff" }}>
            <UserOutlined style={{ fontSize: 24, color: "#fff" }} />
            <Text style={{ display: "block", color: "#fff", marginTop: 8 }}>
              Total Users
            </Text>
            <Title level={3} style={{ color: "#fff" }}>
              {userStats.length}
            </Title>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card style={{ background: "#52c41a", color: "#fff" }}>
            <AppstoreOutlined style={{ fontSize: 24, color: "#fff" }} />
            <Text style={{ display: "block", color: "#fff", marginTop: 8 }}>
              Total Features
            </Text>
            <Title level={3} style={{ color: "#fff" }}>
              {featureStats.length}
            </Title>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card style={{ background: "#faad14", color: "#fff" }}>
            <ThunderboltOutlined style={{ fontSize: 24, color: "#fff" }} />
            <Text style={{ display: "block", color: "#fff", marginTop: 8 }}>
              Total Actions
            </Text>
            <Title level={3} style={{ color: "#fff" }}>
              {totalActions}
            </Title>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card style={{ background: "#13c2c2", color: "#fff" }}>
            <LineChartOutlined style={{ fontSize: 24, color: "#fff" }} />
            <Text style={{ display: "block", color: "#fff", marginTop: 8 }}>
              Top Feature
            </Text>
            <Title level={3} style={{ color: "#fff" }}>
              {topFeature}
            </Title>
          </Card>
        </Col>
      </Row>

      {/* Charts */}
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card title="Top Users">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userStats}>
                <XAxis dataKey="user" />
                <YAxis />
                <RechartsTooltip />
                <Bar dataKey="count" fill="#1890ff" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Feature Usage">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={featureStats}>
                <XAxis dataKey="feature" />
                <YAxis />
                <RechartsTooltip />
                <Line type="monotone" dataKey="count" stroke="#52c41a" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Timeline */}
      <TimelineVis contributions={contributions} />
    </div>
  );
}
